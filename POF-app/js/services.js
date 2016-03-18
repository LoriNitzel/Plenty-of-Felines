angular.module('pofApp')
  .service('catsService', ['$http', function($http){
    return {
      getCats:function(catdata){
        return $http.get('http://localhost:3000/users/:id/matches', catdata)
         .then(function(response){
          console.log(response);
        }, function(error){
          console.log(error);
        })
      }
    }
  }])


  //   this.showCats = function(){
  //     var config = {
  //       method: 'GET',
  //       url: 'http://localhost:3000/' + id
  //     };
  //     return $http(config);
  //   }

  // }])
 

  .service('holdingService', ['$http', function($http){
    return {
      postAnswers:function(holdAnswer){
        return $http.post('http://localhost:3000/questions', holdAnswer)
        .then(function(response){
          console.log(response);
        }, function(error){
          console.log(error);
        })
      }
      }
   }]);

  
//   .service('SignupService', ['$http', SignupService])

// function SignupService($http){
//   return {
//     signup: function(user){
//         return $http.post('http://localhost:3000/users/signup', user)
//         .then(function(response){
//           return response;
//         }, function(error){
//           return error;
//         });
//       }
//     };
//   }


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


// $http.get('http://api.petfinder.com/auth.getToken?key=19d1a42a0f73c34d672584bd569b2ef1&arg1=foo&token=67890&sig=abcdef')

