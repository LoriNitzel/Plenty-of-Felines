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

      .when('/questions', {
        templateUrl: 'views/questions.html', 
        controller: 'questionsController as QC'
      })
    
      .when('/users', {
        templateUrl: 'views/join.html',
        controller: 'joinController as JC'
      })

      .when('/users/matches', {
        templateUrl: 'views/matches.html',
        controller: 'matchesController as MAC'
      })

      .when('/users/matches/:id', {
        templateUrl: 'views/matchescats.html',
        controller: 'matchesController as MAC'
      })

      .when('/users/:id', {
        templateUrl: 'views/profile.html',
        controller: 'profileController as PC'
      })

      .when('/users/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'profileController as PC'
      })

      .when('/cats', {
        templateUrl: 'views/allcats.html',
        controller:'allcatsController as AC'
      })

      .when('/cats/admin', {
        templateUrl: 'views/admin.html', 
        controller: 'adminController as AC'
      })

      .when('/cats/admin/create', {
        templateUrl: 'views/admincreate.html',
        controller: 'adminController as AC'
       })

      .when('/cats/:id', {
        templateUrl: 'views/cats.html',
        controller:'allcatsController as AC'
      })

      .when('/cats/admin/:id', {
        templateUrl: 'views/adminupdate.html',
        controller: 'adminController as AC'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'navbarController as NC'
      })

      .when('/logout', {
        templateUrl: '',
        controller: 'logoutController as LC'
      })
    
      .otherwise({
        redirectTo: '/'
    });
      // $locationProvider.html5Mode(true);
  });