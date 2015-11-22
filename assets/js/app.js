'use strict';

var bindr = angular.module('bindr',['ngRoute']);

bindr.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '/templates/main.html',
        controller: 'mainCtrl'
      }).otherwise({
        redirectTo: '/',
        caseInsensitiveMatch: true
        })
  }]);


