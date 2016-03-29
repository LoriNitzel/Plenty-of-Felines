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

  angular.module('pofApp')
    .directive('confirmationNeeded', confirmationNeeded);

    function confirmationNeeded() {
  return {
    priority: 1,
    terminal: true,
    link: function (scope, element, attr) {
      var msg = attr.confirmationNeeded || "Are you sure?";
      var clickAction = attr.ngClick;
      element.bind('click',function () {
        if ( window.confirm(msg) ) {
          scope.$eval(clickAction)
        }
      });
    }
  };
};
