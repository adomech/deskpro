var customInterpolationApp = angular.module('deskpro', []);
 
customInterpolationApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('//');
  $interpolateProvider.endSymbol('//');
});

