app.controller('mainController', ['$scope', mainController]);
app.controller('matchesController', ['$scope', '$routeParams', 'catsService', matchesController]);

function mainController($scope){
  var vm = this;
 
  vm.GuestEnter = function(){
    window.location = './views/welcome.html';
  };


};

function matchesController($scope, catsService, $routeParams){
  var vm = this; 

  
}

// function JoinController ($scope){
//   var vm = this;
//   vm.joinSubmit = function(firstname, lastname, username, password, email){
//     $http({
//       method: 'POST',
//       url: 'https://localhost3000',
//       data: {
//         firstname: firstname,
//         lastname: lastname,
//         username: username,
//         password: password,
//         email: email
//       }
//     }).then(function(data){
//       console.log(data);
//     });
//   };
// }

// function LoginController($scope){
//   var vm = this;
//   vm.loginSubmit = function(){

//   }
// };

