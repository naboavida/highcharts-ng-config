'use strict';

angular.module('myapp.services', ['ngResource'])
  .factory('JsonService', function($resource) {
    // return $resource('../json/highchartsStructure.json');
    return $resource('highchartsStructure.json');
  })
  .factory('StaticJsonService', function(){
    return JSON.parse(
      JSON.stringify(
        {
          "options": {
            "chart": {
              "type": ["line", "bar", "pie"],
              "marginRight": [0, 1024]
            },
            "plotOptions": {
              "series": {
                "marker": {
                  "enabled": [true, false]
                }
              }
            }
          },
          "yAxis": {
            "startOnTick": [true, false]
          }
        }
      )
    );
  })