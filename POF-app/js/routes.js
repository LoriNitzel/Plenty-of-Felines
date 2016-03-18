angular.module('pofApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html'
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

      .when('/users/:id/matches', {
        templateUrl: 'views/matches.html',
        controller: 'matchesController as MC'
      })

      .when('/users/:id/matches/:id', {
        templateUrl: 'views/cats.html'
      })

      .when('/questions', {
        templateUrl: 'views/questions.html', 
        controller: 'questionsController as QC'
      })

      .when('/questions/:id', {
        templateUrl: 'views/questions2.html'
      })

      .when('/about', {
        templateUrl: 'views/about.html'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
    
      .otherwise({
        redirectTo: '/'
    });
      // $locationProvider.html5Mode(true);
  });