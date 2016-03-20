angular.module('pofApp')

//****** display all cats on allcats.html *****//

  .service('catsService', ['$http', function($http){
    return {
      getCats: function(){
        return $http.get('http://localhost:3000/cats');
      }
    }
  }])

//****** display individual cats on cats/:id *****//

  .service('indcatsService', ['$http', '$routeParams', function($http, $routeParams){
    return{
      showCats: function(param1){
        return $http.get('http://localhost:3000/cats/' + param1);
      }
    }
  }])
 
//****** post Question data entered by Users in Users table*****//

  .service('holdingService', ['$http', function($http){
    return {
      postAnswers: function(holdAnswer){
        return $http.post('http://localhost:3000/questions', holdAnswer)
        .then(function(response){
          console.log(response);
        }, function(error){
          console.log(error);
        })
      }
      }
   }])

//****** post User signup data when they register *****//
  
.service('signupService', ['$http', function($http){
   return {
      signup: function(userData){
        return $http.post('http://localhost:3000/users', userData);
    }
  }
 }])

//****** post user as a Guest in the database ******//

// .service('guestSigninService', ['$http', function($http){
//    return {
//     addGuest: function(guestData) {
//     return $http.post('http://localhost:3000/users', guestData);
//   }
// }
// }]);


//****** Sign registered user in to the application ******//


//   .service('SigninService', ['$http', SigninService])

// function SigninService($http){
//   return {
//     signin: function(user){
//         return $http.post('http://localhost:3000/users/signin', user)
//         .then(function(response){
//           return response;
//         }, function(error){
//           return error;
//         });
//     }
//   };
// }




