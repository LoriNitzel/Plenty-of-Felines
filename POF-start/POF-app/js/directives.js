  angular.module('pofApp')
    .directive('footerdir', footerdir);

  function footerdir() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/directives/footerdir.html'
    };
  };
    
 angular.module('pofApp')
    .directive('navbardir', navbardir);

  function navbardir() {
    return {
      restrict: 'E',
      templateUrl: '/directives/navbardir.html',
      // controller: 'navbarController as NC'
    };
  };

