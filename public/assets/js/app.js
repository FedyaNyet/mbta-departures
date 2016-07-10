//Angular app definition
angular.module('mbt_App', ['angularMoment'])
	.config(function($interpolateProvider){
		//change interpolater to avoid clashing SWIG 
	    $interpolateProvider.startSymbol('[[').endSymbol(']]');
	})
	.controller('mainController', function($scope) {

		//set dynamic scope paramters
		$scope.sortBy = "Origin";
		$scope.sortReverse = false;
		$scope.filter = "";
	  
		//Add the list of schedules from swig rendered obj.
		$scope.schedules = schedules;

		$scope.setSort = function(col){
			$scope.sortBy = col;
			if($scope.sortBy == col)
				$scope.sortReverse = !$scope.sortReverse;
		};

		$scope.downBy = function(col){
			return $scope.sortBy == col && $scope.sortReverse;
		};
		$scope.upBy = function(col){
			return $scope.sortBy == col && !$scope.sortReverse;
		};
	});