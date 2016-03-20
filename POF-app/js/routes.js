angular.module('pofApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html'
      })
    
      .when('/users', {
        templateUrl: 'views/join.html',
        controller: 'joinController as JC'
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

      .when('/cats', {
        templateUrl: 'views/allcats.html',
        controller:'allcatsController as AC'
      })

      .when('/cats/:id', {
        templateUrl: 'views/cats.html',
        controller:'allcatsController as AC'
      })
    
      .otherwise({
        redirectTo: '/'
    });
      // $locationProvider.html5Mode(true);
  });