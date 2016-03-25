app.controller('mainController', ['$scope', mainController]);
app.controller('matchesController', ['$scope', 'matchesService', '$routeParams', '$location', matchesController]);
app.controller('joinController', ['$scope', 'signupService', '$window', '$location', joinController]);
app.controller('allcatsController', ['$scope', 'catsService', 'indcatsService','$routeParams', '$location', allcatsController]);
app.controller('questionsController', ['$scope', 'holdingService', '$routeParams','$location', questionsController]);
app.controller('profileController', ['$scope', 'profileService', '$routeParams', '$location', profileController]);
app.controller('signinController', ['$scope', 'signinService', '$window', '$location', signinController]);
app.controller('navbarController', ['$scope', '$location', navbarController]);
// app.controller('guestController', ['$scope', 'guestSigninService', guestController]);


//+++++++ MAIN CONTROLLER - FOR ENTRY PAGE +++++++//

function mainController($scope){
  var vm = this;
 
  
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
      if (cats[i].gender == user.desired_gender){
        totalPoints = totalPoints + 5;
      } 
      if (user.desired_gender == 'any'){
        totalPoints = totalPoints + 5;        
      } 
      if (cats[i].age <= 1 && user.desired_age == "kittens"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].age > 1 && cats[i].age <= 4 && user.desired_age == "young-adults"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].age > 4 && cats[i].age <= 10 && user.desired_age == "adults"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].age > 10 && user.desired_age == "seniors"){
        totalPoints = totalPoints + 5;
      }
      if (user.desired_age == "any"){
        totalPoints = totalPoints + 5;
      }
      if (user.desired_color == "any"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].color == "black" && user.desired_color == "black"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].color == "grey" && user.desired_color == "grey"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].color == "orange" && user.desired_color == "orange"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].color == "white" && user.desired_color == "white"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].color == "tiger" && user.desired_color == "tiger"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].color == "tortie" && user.desired_color == "tortie"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].hair == "domestic short hair" && user.desired_hair == "short"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].hair == "domestic long hair" && user.desired_hair == "long"){
        totalPoints = totalPoints + 5;
      }
      if (user.desired_hair == "any"){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].good_with_cats == user.cats_in_home){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].good_with_dogs == user.dogs_in_home){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].good_with_other == user.others_in_home){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].good_with_kids == user.kids_in_home){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].atmosphere_needed == user.atmosphere_in_home){
        totalPoints = totalPoints + 5;
      }
      if (cats[i].medical_issue == user.medical_acceptable){
        totalPoints = totalPoints + 5;
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

function joinController($scope, signupService, $window, $location){
  var vm = this;
  vm.signupService = signupService;

   vm.signup = function() {
    var userData = {
      "first_name": vm.firstname,
      "last_name": vm.lastname,
      "email": vm.email,
      "password": vm.password
    };
    // console.log(newData);

    signupService.signup(userData).then(function(response){
      console.log(response);
      console.log(response.data.token);
      $window.sessionStorage.token = response.data.token;
      id = response.data.id;
      // console.log(response.data.token);
      // console.log(response.data.id);
    })

    vm.userQuestionnaire = function(path){
      $location.path('/questions');
      }
  }
}

//+++++++ USER SIGN IN CONTROLLER +++++++//

function signinController($scope, signinService, $window, $location){

  var vm = this;
  var id;
  
  vm.signin = function(email, password){ 
    signinService.signin(email, password).then(function(response) {
        console.log(response);
        //get the token from the response and save it in sessionStorage or local storage
        $window.sessionStorage.token = response.data.token;
        id = response.data.id;
        console.log(response.data.token);
        console.log(response.data.id);
        $location.path('/users/' + id);

      })
      .catch(function() {
        console.error('something went wrong!');
      });
  }
      
      vm.guestEnter = function(path){
        $location.path('/guest');
      }

      vm.joinEnter = function(path){
        $location.path('/users');
      }

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

  vm.updateCat = function(){
    indcatsService.updateCat(vm.param1).then(function(data){
    console.log(data);
    vm.cat = data.data;
  })
  }

  vm.deleteCat = function(){
    indcatsService.deleteCat(vm.param1).then(function(data){
    console.log(data);
    vm.cat = data.data;
  });
  }

  vm.backtoMatches = function(path){
    $location.path('/users/matches');
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

//++++++++LOGOUT CONTROLLER +++++++++//

function navbarController($location) {
  var vm = this; 
  vm.logout = logout; 

  function logout(){
    delete $window.sessionStorage.token;
    $location.path('/');
  }
};

//+++++++ GUEST SIGN IN CONTROLLER +++++++//

// function guestController($scope, guestSigninService){
//   var vm = this;

//   guestSigninService.addGuest().then(function(guestData){
//     console.log(guestData);
//   })
// }

