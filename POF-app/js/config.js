angular.module('pofApp').config(function($httpProvider){
  $httpProvider.interceptors.push('JWTFactory');
});