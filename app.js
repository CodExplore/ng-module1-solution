(function () {
	'use strict';
	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {


		$scope.LunchTest = function () {
			$scope.messageArea = "Please enter data first";
	if ($scope.itemsList !=="" || !$scope.itemsList === " ") {
			var contentList = $scope.itemsList;
			var splitList = contentList.split(",");

			var countItems = 0;
			for (var i = 0; i < splitList.length; i++) {
				countItems = countItems + 1;
				
			}

			if (countItems > 0 && countItems <= 3) {
				$scope.messageArea = "Enjoy";
			}
			if (countItems > 3) {
				$scope.messageArea = "Too Much";
			}
			}
		}
        $scope.CheckChange = function () {
		if($scope.itemsList ==="") {
			$scope.messageArea = " ";
		}
	}

	}
	

})();
