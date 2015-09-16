'use strict';

angular.module('myapp.services', ['ngResource'])
  .factory('JsonService', function($resource) {
    // return $resource('../json/highchartsStructure.json');
    return $resource('highchartsStructure.json');
  });