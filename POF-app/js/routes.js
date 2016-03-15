angular.module('pofApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/enter.html',
        controller: 'MainController as MC'
      })
    
      .when('/users', {
        templateUrl: 'views/join.html'
      })

      .when('/users/:id', {
        templateUrl: 'views/profile.html'
      })

      .when('/users/:id/settings', {
        templateUrl: 'views/settings.html'
      })

      .when('/main', {
        templateUrl: '.views/welcome.html'
      })

      .when('/questions', {
        templateUrl: 'views/questions.html'
      })

      .when('/questions/:id', {
        templateUrl: 'views/questions2.html'
      })
      .otherwise({
        redirectTo: '/'
    });
  });