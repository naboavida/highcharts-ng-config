'use strict';

myapp.controller('StructureCtrl', function($scope, JsonService){

	// JsonService.get(function(data){
	// 	console.log("got data");
	// });
	// we should read from the json but got issues with CORS above
	
	var configStructure = JSON.parse(
		JSON.stringify(
			{
				"options": {
					"chart": {
						"type": ["bar", "line"],
						"marginRight": [0, 1024]
					}
				}
			}
		)
	);



	$scope.chartTypes = configStructure.options.chart.type;

	
	
})