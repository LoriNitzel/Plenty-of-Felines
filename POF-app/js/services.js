angular.module('pofApp')
  .service('catsService', ['$http', function($http){

    this.getCats = function(){
      var config = {
        method: 'GET',
        url: 'http://localhost:3000'
      };
      return $http(config);
    }

    this.showCats = function(){
      var config = {
        method: 'GET',
        url: 'http://localhost:3000/' + id
      };
    }

  }]);
 

  // .service('signupService', ['$http', signupService]);

// $http.get('http://api.petfinder.com/auth.getToken?key=19d1a42a0f73c34d672584bd569b2ef1&arg1=foo&token=67890&sig=abcdef')

