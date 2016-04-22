app.controller('mainController', ['$scope', 'signinService', '$window', mainController]);
app.controller('matchesController', ['$scope', 'matchesService', '$routeParams', '$location', matchesController]);
app.controller('joinController', ['$scope', 'signupService', 'signinService', '$window', '$location', joinController]);
app.controller('allcatsController', ['$scope', 'catsService', 'indcatsService','$routeParams', '$location', allcatsController]);
app.controller('questionsController', ['$scope', 'holdingService', '$routeParams','$location', questionsController]);
app.controller('profileController', ['$scope', 'profileService', '$routeParams', '$location', profileController]);
app.controller('signinController', ['$scope', 'signinService', '$window', '$location', signinController]);
app.controller('navbarController', ['$scope', '$location', 'signinService', '$window', navbarController]);
app.controller('adminController', ['$scope', '$location', 'catsService', 'indcatsService', '$routeParams', adminController]);

// app.controller('guestController', ['$scope', 'guestSigninService', guestController]);


//+++++++ MAIN CONTROLLER - FOR ENTRY PAGE +++++++//

function mainController($scope, signinService, $window){
  var vm = this;

  console.log($window.sessionStorage.token);

  $scope.$watch(function(){return signinService.state.isLoggedin}, function(newval){
    vm.signinState = newval;
    console.log(newval);
  })


  if ($window.sessionStorage.token){
    signinService.state.isLoggedin = true;
  }
  // console.log(vm.signinState);
};

//++++++  MAKE AND DISPLAY MATCHES CONTROLLER ++++++++//

function matchesController($scope, matchesService, $routeParams, $location){
  var vm = this;
  var user = {};
  var cats;
  vm.matchesService = matchesService;

  
  function getPoints(user, cats) {
    var totalPoints = 0;

    
    for (var i = 0; i < cats.length; i++){
      totalPoints = 0; 
      var agePoints = 0;
      var ageNum = cats[i].age;
      if (cats[i].gender == user.desired_gender){
        totalPoints = totalPoints + 7;
      } 
      if (user.desired_gender == 'any'){
        totalPoints = totalPoints + 8;        
      } 
      if (user.desired_age == 'kittens'){
        ageNum = 1;
      }
      if (user.desired_age == "young-adults"){
        ageNum = 4;
      } 
      if (user.desired_age == "adults"){
        ageNum = 7;
      }
      if (user.desired_age == "seniors"){
        ageNum = 15;
      } 
        agePoints = 5 - Math.abs(cats[i].age - ageNum);
        totalPoints = totalPoints + 1.5*agePoints;
        console.log(agePoints, totalPoints);
      if (cats[i].age <= 1 && user.desired_age == "kittens"){
        totalPoints = totalPoints + 5;
      }
      // if (cats[i].age > 1 && cats[i].age <= 4 && user.desired_age == "young-adults"){
      //   totalPoints = totalPoints + 5;
      // }
      // if (cats[i].age > 4 && cats[i].age <= 10 && user.desired_age == "adults"){
      //   totalPoints = totalPoints + 5;
      // }
      // if (cats[i].age > 10 && user.desired_age == "seniors"){
      //   totalPoints = totalPoints + 5;
      // }
      // if (user.desired_age == "any"){
      //   totalPoints = totalPoints + 5;
      // }
      if (user.desired_color == "any"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].color == "black" && user.desired_color == "black"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].color == "grey" && user.desired_color == "grey"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].color == "orange" && user.desired_color == "orange"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].color == "white" && user.desired_color == "white"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].color == "tiger" && user.desired_color == "tiger"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].color == "tortie" && user.desired_color == "tortie"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].hair == "domestic short hair" && user.desired_hair == "short"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].hair == "domestic long hair" && user.desired_hair == "long"){
        totalPoints = totalPoints + 4;
      }
      if (user.desired_hair == "any"){
        totalPoints = totalPoints + 4;
      }
      if (cats[i].good_with_cats == user.cats_in_home){
        totalPoints = totalPoints + 7;
      }
      if (cats[i].good_with_dogs == user.dogs_in_home){
        totalPoints = totalPoints + 7;
      }
      if (cats[i].good_with_other == user.others_in_home){
        totalPoints = totalPoints + 7;
      }
      if (cats[i].good_with_kids == user.kids_in_home){
        totalPoints = totalPoints + 7;
      }
      if (cats[i].atmosphere_needed == user.atmosphere_in_home){
        totalPoints = totalPoints + 6;
      }
      if (cats[i].medical_issue == user.medical_acceptable){
        totalPoints = totalPoints + 10;
      }
      cats[i]['points'] = totalPoints; 
     }
     // console.log(cats);
     var catsSorted = cats.sort(function(a,b){return b.points - a.points});
      console.log((catsSorted)); 
    vm.topFive = catsSorted.slice(0,6);
    console.log(vm.topFive);
  }
 
  
  matchesService.getMatches().then(function(matchdata){
    user = matchdata.data.user;
    cats = matchdata.data.model;
    getPoints(user, cats); 
  })
 


  vm.getAll = function(path){
    $location.path('/cats');
  }

};


//++++++ USER JOIN/REGISTER CONTROLLER ++++++++//

function joinController($scope, signupService, signinService, $window, $location){
  var vm = this;
  vm.signupService = signupService;

   vm.signup = function() {
    var userData = {
      "first_name": vm.firstname,
      "last_name": vm.lastname,
      "email": vm.email,
      "password": vm.password
    };

    signupService.signup(userData).then(function(response){
      console.log(response);
      console.log(response.data.token);
      $window.sessionStorage.token = response.data.token;
      id = response.data.id;
      signinService.state.isLoggedin = true;
      // console.log(response.data.token);
      // console.log(response.data.id);
    })

    vm.userQuestionnaire = function(path){
      $location.path('/questions');
      }
  }

    vm.toQuestions = function(path){
      $location.path('/questions');
    }

    // vm.joinClick = false; 
    // vm.showClick = function(){
    //   vm.joinClick = true;
    // }
}

//+++++++ USER SIGN IN CONTROLLER +++++++//

function signinController($scope, signinService, $window, $location){

  var vm = this;
  var id;
  
  vm.signin = function(email, password){ 
    signinService.signin(email, password).then(function(response) {
        console.log(response);
        signinService.state.isLoggedin = true;
        //get the token from the response and save it in sessionStorage or local storage
        $window.sessionStorage.token = response.data.token;
        id = response.data.id;
        // console.log(response.data.token);
        // console.log(response.data.id);
        $location.path('/users/matches');

      })
      .catch(function(msg) { 
        console.log(msg);
        vm.loginError = true;
        console.error('something went wrong!');
      });
  }
      
      vm.guestEnter = function(path){
        $location.path('/guest');
      }

      vm.joinEnter = function(path){
        $location.path('/users');
      }

      vm.show = false;
}

//+++++++ SHOW USER PROFILE CONTROLLER +++++//

function profileController($scope, profileService, $routeParams, $location){
  var vm = this; 
  vm.param1 = $routeParams.id;

  vm.showUser = function(){
    profileService.showUser(vm.param1).then(function(data){
    console.log(data);
    vm.user = data.data;
  })
  }

  vm.updateUser = function(){
    profileService.updateUser(vm.param1).then(function(data){
    console.log(data);
    vm.user = data.data;
  })
  }

  vm.openEdit = function(path){
    $location.path('/users/edit/' + vm.param1);
  }
  
  vm.deleteUser = function(){
    profileService.deleteUser(vm.param1).then(function(data){
    console.log(data);
    vm.user = data.data;
  });
  }
  vm.showUser();
  vm.seeMatches = function(path){
    $location.path('/users/matches');
  }
  vm.qnaireAgain = function(path){
    $location.path('/questions');
  }
}


//++++++ DISPLAY CATS CONTROLLER ++++++++//

function allcatsController($scope, catsService, indcatsService, $routeParams, $location){
  var vm = this; 
  vm.param1 = $routeParams.id;
  
  catsService.getCats().then(function(catdata){
    // console.log(catdata);
    vm.cats = catdata;
  })

  indcatsService.showCats(vm.param1).then(function(data){
    console.log(data);
    vm.cat = data.data;
  })

  vm.backtoMatches = function(path){
    $location.path('/users/matches');
  }

  vm.backtoCats = function(path){
    $location.path('/cats');
  }
}


//+++++++ CAPTURE ANSWERS TO QUESTIONS CONTROLLER ++++++//

function questionsController($scope, holdingService, $routeParams, $location){
  var vm = this;
  var answers = {};

  vm.openQuestions = function(){
    $location.path('/questions');
  }

  vm.holdingService = holdingService;

  
  vm.answerdata = function(key, entry) {
    answers[key] = entry;
      // console.log(answers);

        holdingService.answerdata(answers).then(function(response){
        console.log(answers);
      });
    } 
    

  vm.toMatches = function(){
  $location.path('/users/matches');
  }
};

//++++++++NAVBAR CONTROLLER +++++++++//

function navbarController($scope, $location, signinService, $window) {
  var vm = this; 
  
  vm.signinState = signinService.state.isLoggedin;

  $scope.$watch(function(){return signinService.state.isLoggedin}, function(newval){
    vm.signinState = newval;
    console.log(newval);
  })

  vm.logout = function(){
    console.log('session: ', $window.sessionStorage);
    console.log('token: ', $window.sessionStorage.token);
    delete $window.sessionStorage.token;
    signinService.state.isLoggedin = false;
    $location.path('/');
  }

  vm.toMatches = function(path){
    $location.path('/users/matches');
  }

  vm.backHome = function(path){
    $location.path('/users');
  }
};

//++++++++ADMIN CONTROLLER +++++++++//

function adminController($scope, $location, catsService, indcatsService, $routeParams){
  var vm = this; 
  vm.param1 = $routeParams.id;
  
  catsService.getCats().then(function(catdata){
    // console.log(catdata);
    vm.cats = catdata;
  })

  indcatsService.showCats(vm.param1).then(function(data){
    // console.log(data);
    vm.cat = data.data;
  })

  vm.createCat = function(){
    var newCatData = {
      "FCCRSNC_id": vm.id,
      "name": vm.name,
      "photo": vm.photo,
      "photo2": vm.photo2,
      "photo3": vm.photo3,
      "color": vm.color,
      "hair": vm.hair,
      "age": vm.age,
      "medical_issue": vm.medical,
      "gender": vm.gender,
      "good_with_cats": vm.good_cats,
      "good_with_dogs": vm.good_dogs,
      "good_with_kids": vm.kids,
      "good_with_other": vm.other,
      "atmosphere_needed": vm.atmos,
      "general_characteristics": vm.info,
      "summary": vm.summary
    };

    indcatsService.createCat(newCatData).then(function(response){
        $location.path('/cats/admin');    

    })
  }

  vm.updateCat = function(){
    var updateCatData = {
      "FCCRSNC_id": vm.id,
      "name": vm.name,
      "photo": vm.photo,
      "photo2": vm.photo2,
      "photo3": vm.photo3,
      "color": vm.color,
      "hair": vm.hair,
      "age": vm.age,
      "medical_issue": vm.medical,
      "gender": vm.gender,
      "good_with_cats": vm.good_cats,
      "good_with_dogs": vm.good_dogs,
      "good_with_kids": vm.kids,
      "good_with_other": vm.other,
      "atmosphere_needed": vm.atmos,
      "general_characteristics": vm.info,
      "summary": vm.summary
    };

    indcatsService.updateCat(vm.param1, updateCatData).then(function(data){
    console.log(data);
    // vm.cat = data;
  })
  }

  vm.deleteCat = function(cat_id){
    window.alert('Delete called!');
    indcatsService.deleteCat(cat_id).then(function(data){
    console.log(cat_id);
    catsService.getCats().then(function(data){
      vm.cats = data;
    })
  })
  }

  vm.toUpdate = function(cat_id){
    $location.path('/cats/admin/' + cat_id);
  }

  vm.toCreate = function(path){
    $location.path('/cats/admin/create');
  }

  vm.toAdmin = function(path){
    $location.path('/cats/admin');
  }

};



//+++++++ GUEST SIGN IN CONTROLLER +++++++//

// function guestController($scope, guestSigninService){
//   var vm = this;

//   guestSigninService.addGuest().then(function(guestData){
//     console.log(guestData);
//   })
// }

