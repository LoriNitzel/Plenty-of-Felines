
angular.module('pofApp')

  .service('backendService', function(){
    return {url: "https://stark-depths-49375.herokuapp.com"}
  })

//****** display all cats on allcats.html *****//

  .service('catsService', ['$http', 'backendService', function($http, backendService){
    return {
      getCats: function(){
        console.log(backendService.url);
        return $http.get(backendService.url + '/cats');
      }
    }
  }])

//****** display individual cats on cats/:id *****//

  .service('indcatsService', ['$http', '$routeParams', 'backendService', function($http, $routeParams, backendService){
    return{
      showCats: function(param1){
        return $http.get(backendService.url + '/cats/' + param1);
      },
      createCat: function(newCatData){
        return $http.post(backendService.url + '/cats/admin/create', newCatData);
      },
      updateCat: function(param1, updateCatData){
        return $http.put(backendService.url + '/cats/admin/' + param1, updateCatData);
      },
      deleteCat: function(param1){
        return $http.delete(backendService.url + '/cats/admin/delete/' + param1);
    }
  }
}])
 
//****** post Question data entered by Users in Users table*****//

  .service('holdingService', ['$http', 'backendService', function($http, backendService){
    return {
      answerdata: function(answers){
        return $http.put(backendService.url + '/questions', answers)
        .then(function(response){
          console.log(response);
        }, function(error){
          console.log(error);
        })
      }
      }
   }])

//****** post User signup data when they register *****//
  
.service('signupService', ['$http', 'backendService', function($http, backendService){
   return {
      signup: function(userData){
        return $http.post(backendService.url + '/users', userData);
        // .success(function(userData, status){
        //   console.log(userData, status);
        // })
    }
  }
 }])

//****** Sign registered user in to the application ******//


.service('signinService', ['$http', 'backendService', function($http, backendService){
  return {
    state: {isLoggedin: false},
    signin: function(email, password){
      return $http.post(backendService.url + '/login', {"email": email, "password": password});
      }
    }
}])


//****** Grab User ID info for Profile ******//

  .service('profileService', ['$http', '$routeParams', 'backendService', function($http, $routeParams, backendService){
    return {
      showUser: function(param1){
        return $http.get(backendService.url + '/users/' + param1);
      },
      updateUser: function(param1){
        return $http.put(backendService.url + '/users/' + param1);
      },
      deleteUser: function(param1){
        return $http.delete(backendService.url + '/users/' + param1);
      }
    }
}])

//******** GET Matches from Matches Database and Display on Matches Page ********//

   .service('matchesService', ['$http', 'backendService', function($http, backendService){
    return {
      getMatches: function(){
        return $http.get(backendService.url + '/users/matches');
      }
    }
  }]);


//****** post user as a Guest in the database ******//

// .service('guestSigninService', ['$http', function($http){
//    return {
//     addGuest: function(guestData) {
//     return $http.post('http://localhost:3000/users', guestData);
//   }
// }
// }]);


