app.controller('mainController', ['$scope', mainController]);
app.controller('matchesController', ['$scope', 'catsService', '$routeParams', matchesController]);
app.controller('joinController', ['$scope', 'signupService', joinController]);
// app.controller('guestController', ['$scope', 'guestSigninService', guestController]);
app.controller('allcatsController', ['$scope', 'catsService', 'indcatsService','$routeParams', allcatsController]);
app.controller('questionsController', ['$scope', 'holdingService', '$location', questionsController]);
app.controller('profileController', ['$scope', 'profileService', '$routeParams', '$location', profileController]);

//+++++++ MAIN CONTROLLER - NOT SURE WHAT IT DOES YET +++++++//

function mainController($scope){
  var vm = this;
 
  vm.GuestEnter = function(){
    window.location = './views/welcome.html';
  };


};

//++++++  MAKE AND DISPLAY MATCHES CONTROLLER ++++++++//

function matchesController($scope, catsService, $routeParams){
  var vm = this;
}


//++++++ USER JOIN/REGISTER CONTROLLER ++++++++//

function joinController($scope, signupService){
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
  }
}

//+++++++ USER SIGN IN CONTROLLER +++++++//


//+++++++ SHOW USER PROFILE CONTROLLER +++++//

function profileController($scope, profileService, $routeParams, $location){
  var vm = this; 
  vm.param1 = $routeParams.id;

  profileService.showUser(vm.param1).then(function(data){
    console.log(data);
    vm.user = data.data;
  })

  profileService.updateUser(vm.param1).then(function(data){
    console.log(data);
    vm.user = data.data;
  })

  vm.openEdit = function(path){
    $location.path('/users/:id/edit');
  }
  // profileService.deleteUser(vm.param1).then(function(data){
  //   console.log(data);
  //   vm.user = data.data;
  // });
}

//+++++++ GUEST SIGN IN CONTROLLER +++++++//

// function guestController($scope, guestSigninService){
//   var vm = this;

//   guestSigninService.addGuest().then(function(guestData){
//     console.log(guestData);
//   })
// }

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

  indcatsService.updateCat(vm.param1).then(function(data){
    console.log(data);
    vm.cat = data.data;
  })
  // indcatsService.deleteCat(vm.param1).then(function(data){
  //   console.log(data);
  //   vm.cat = data.data;
  // });
}


//+++++++ CAPTURE ANSWERS TO QUESTIONS CONTROLLER ++++++//

function questionsController($scope, holdingService, $location){
  var vm = this;

  vm.openQuestions = function(path){
    console.log('blah');
    $location.path('/questions');
  }

  vm.holdingService = holdingService;

    var holdAnswer = [];
    this.answerdata = function(info){
      holdAnswer.push(info);
      console.log(holdAnswer);
        if (holdAnswer.length === 10) {
          holdingService.postAnswers(holdAnswer).then(function(response){
            console.log(response);
          });
        }
  }
};


