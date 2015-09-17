'use strict';

myapp.controller('StructureCtrl', function($scope, JsonService, StaticJsonService){

	// JsonService.get(function(data){
	// 	console.log("got data");
	// });
	// we should read from the json but got issues with CORS above
	
	var configStructure = StaticJsonService;

	// $scope.highchartsNG = {};
	$scope.highchartsNG = {
        options: {
            chart: {
                type: 'line',
                marginRight: 0
            },
            plotOptions: {
                series: {
                  stacking: '',
                  marker: {
                    enabled: true
                  }
                }
              }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello',
        },
        yAxis: {
          title: {
            text: null
          },
          startOnTick: false
        },
        loading: false
    };


	$scope.chartTypes = configStructure.options.chart.type;
	$scope.rightMarginDomain = configStructure.options.chart.marginRight;
	$scope.symbolsEnabled = configStructure.options.plotOptions.series.marker.enabled;
	$scope.startOnTickValues = configStructure.yAxis.startOnTick;

	$scope.chartTitleEnabled = true;
	$scope.yAxisTitleEnabled = true;
	var auxTitle = "";
	var auxYTitle = "";

	$scope.debugChartConfig = true;

	$scope.$watch('chartTitleEnabled', function(newValue, oldValue, scope) {
		if(newValue != undefined && oldValue != undefined && newValue != oldValue){
			if(newValue == false){
				auxTitle = $scope.highchartsNG.title.text;
				$scope.highchartsNG.title.text = null;
			} else {
				$scope.highchartsNG.title.text = auxTitle;
			}
		}
	});

	$scope.$watch('yAxisTitleEnabled', function(newValue, oldValue, scope) {
		if(newValue != undefined && oldValue != undefined && newValue != oldValue){
			if(newValue == false){
				auxYTitle = $scope.highchartsNG.yAxis.title.text;
				$scope.highchartsNG.yAxis.title.text = null;
			} else {
				$scope.highchartsNG.yAxis.title.text = auxYTitle;
			}
		}
	});


	$scope.applyChartConfig = function(){
		console.log("applyChartConfig");
	}
	
})