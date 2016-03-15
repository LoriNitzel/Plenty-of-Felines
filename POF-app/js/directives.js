function (){
  angular
    .module('pofApp')
    .directive('footerTemp', footerTemp);

  function footerTemp() {
    return {
      restrict: 'EA',
      templateUrl: '/directives/footerTemp.html'
    };
  }
};

function (){
  angular
    .module('pofApp')
    .directive('navbarTemp', navbarTemp);

    function navbarTemp(){
      return {
        restrict: 'EA',
        templateUrl: '/directives/navbarTemp.html'
      };
    }
};