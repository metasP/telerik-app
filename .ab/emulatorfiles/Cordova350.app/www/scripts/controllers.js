angular.module('telerik.controllers', [])
	.controller("TestController", function($scope) {
		$scope.groceries = [
			"Bananas", "Apples", "Oranges", "Milk", "Eggs", "Bread",
			"Cereal", "Beef", "Napkins", "Cheese", "Peanut Butter"
		];
	});