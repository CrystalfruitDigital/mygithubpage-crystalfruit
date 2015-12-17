var app = angular.module('rateStore',[]);
var inLeft = "animated delay fadeInLeft";
var OutLeft = "animated fadeOutLeft";
var inRight = "animated delay fadeInRight";
var OutRight = "animated fadeOutRight";

	var rateCost = [
		{
			lowerCost : 5,
			higherCost: 10,
			selected: false
		},
		{
			lowerCost : 20,
			higherCost: 50,
			selected: false
		} ,
		{
			lowerCost : 6,
			higherCost: 11,
			selected: false
		} ,
		{
			lowerCost : 9,
			higherCost: 21,
			selected: false
		} ,
		{
			lowerCost : 50,
			higherCost: 100,
			selected: false
		},
		{
			lowerCost : 50,
			higherCost: 100,
			selected: false
		} 
	];

app.controller('rateStoreController', function($scope){
	$scope.lower = 0;
	$scope.higher = 0;
	

	

	$scope.toggleSelection = function(i){
		if(rateCost[i].selected === false){
			$scope.lower = $scope.lower +rateCost[i].lowerCost;
			$scope.higher = $scope.higher +rateCost[i].higherCost;
			rateCost[i].selected = true;
			$scope.buttonClass = button;
		}
		else{
			$scope.lower = $scope.lower -rateCost[i].lowerCost;
			$scope.higher = $scope.higher -rateCost[i].higherCost;
			rateCost[i].selected = false;
		}
	}

	$scope.changeTab2 = function(){
		$scope.class1 = OutLeft;
		$scope.class2 = inRight;
		$scope.show = true;	
	}

	$scope.changeTab1 = function(){
		$scope.class2 = OutRight;
		$scope.class1 = inLeft;
	}


});