app.controller('mainController', ['$scope', mainController]);
app.controller('matchesController', ['$scope', 'catsService', '$routeParams', matchesController]);
app.controller('joinController', ['$scope', 'signupService', '$location', joinController]);
// app.controller('guestController', ['$scope', 'guestSigninService', guestController]);
app.controller('allcatsController', ['$scope', 'catsService', 'indcatsService','$routeParams', allcatsController]);
app.controller('questionsController', ['$scope', 'holdingService', '$location', questionsController]);
app.controller('profileController', ['$scope', 'profileService', '$routeParams', '$location', profileController]);
app.controller('signinController', ['$scope', 'signinService', '$window', '$location', signinController]);

//+++++++ MAIN CONTROLLER - NOT SURE WHAT IT DOES YET +++++++//

function mainController($scope){
  var vm = this;
 
  vm.isLoggedin = function(){
    vm.show=true;
  }


};

//++++++  MAKE AND DISPLAY MATCHES CONTROLLER ++++++++//

function matchesController($scope, catsService, $routeParams){
  var vm = this;
}


//++++++ USER JOIN/REGISTER CONTROLLER ++++++++//

function joinController($scope, signupService, $location){
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
  vm.logout = logout; 
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
      function logout(){
        delete $window.sessionStorage.token;
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
}


//++++++ DISPLAY CATS CONTROLLER ++++++++//

function allcatsController($scope, catsService, indcatsService, $routeParams){
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
}


//+++++++ CAPTURE ANSWERS TO QUESTIONS CONTROLLER ++++++//

function questionsController($scope, holdingService, $location){
  var vm = this;
  var answers = {};

  vm.openQuestions = function(){
    $location.path('/questions');
  }

  vm.holdingService = holdingService;

  
  vm.answerdata = function(key, entry) {
    answers[key] = entry;
      console.log(answers);

      for (key in answers){
        holdingService.answerdata(answers).then(function(response){
        console.log(response);
      });
      } 
    }
};


//+++++++ GUEST SIGN IN CONTROLLER +++++++//

// function guestController($scope, guestSigninService){
//   var vm = this;

//   guestSigninService.addGuest().then(function(guestData){
//     console.log(guestData);
//   })
// }

