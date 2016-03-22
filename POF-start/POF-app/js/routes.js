angular.module('pofApp')
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'signinController as SC'
      })

      .when('/guest', {
        templateUrl : 'views/welcome.html',
        controller: 'questionsController as QC'
      })
    
      .when('/users', {
        templateUrl: 'views/join.html',
        controller: 'joinController as JC'
      })

      .when('/users/:id', {
        templateUrl: 'views/profile.html',
        controller: 'profileController as PC'
      })

      .when('/users/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'profileController as PC'
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

      .when('/admin', {
        templateUrl: 'views/admin.html', 
        controller: 'allcatsController as AC'
      })

      .when('/cats/admin/:id', {
        templateUrl: 'views/adminupdate.html',
        controller: 'allcatsController as AC'
      })
    
      .otherwise({
        redirectTo: '/'
    });
      // $locationProvider.html5Mode(true);
  });