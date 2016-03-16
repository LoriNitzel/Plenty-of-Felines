  angular.module('pofApp')
    .directive('footerdir', footerdir);

  function footerdir() {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: '/directives/footerdir.html'
    };
  };
    
 angular.module('pofApp')
    .directive('navbardir', navbardir);

  function navbardir() {
    return {
      restrict: 'A',
      templateUrl: '/directives/navbardir.html'
    };
  };