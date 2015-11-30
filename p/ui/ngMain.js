var app = angular.module("numListApp", []);

app.controller("mainCtrl", function($scope) {
	$scope.openThis = function(num){
		window.open(num);
	};

	$scope.numbers = [
		{
			num: 100,
			exists: "true"
		},
		{
			num: 99,
			exists: "true"
		},
		{
			num: 98,
			exists: "false"
		},
		{
			num: 97,
			exists: "false"
		},
		{
			num: 96,
			exists: "false"
		},
		{
			num: 95,
			exists: "false"
		},
		{
			num: 94,
			exists: "false"
		},
		{
			num: 93,
			exists: "false"
		},
		{
			num: 92,
			exists: "false"
		},
		{
			num: 91,
			exists: "false"
		},
		{
			num: 90,
			exists: "false"
		},
		{
			num: 89,
			exists: "false"
		},
		{
			num: 88,
			exists: "false"
		},
		{
			num: 87,
			exists: "false"
		},
		{
			num: 86,
			exists: "false"
		},
		{
			num: 85,
			exists: "false"
		},
		{
			num: 84,
			exists: "false"
		},
		{
			num: 83,
			exists: "false"
		},
		{
			num: 82,
			exists: "false"
		},
		{
			num: 81,
			exists: "false"
		},
		{
			num: 80,
			exists: "false"
		},
		{
			num: 79,
			exists: "false"
		},
		{
			num: 78,
			exists: "false"
		},
		{
			num: 77,
			exists: "false"
		},
		{
			num: 76,
			exists: "false"
		},
		{
			num: 75,
			exists: "false"
		},
		{
			num: 74,
			exists: "false"
		},
		{
			num: 73,
			exists: "false"
		},
		{
			num: 72,
			exists: "false"
		},
		{
			num: 71,
			exists: "false"
		},
		{
			num: 70,
			exists: "false"
		},
		{
			num: 69,
			exists: "false"
		},
		{
			num: 68,
			exists: "false"
		},
		{
			num: 67,
			exists: "false"
		},
		{
			num: 66,
			exists: "false"
		},
		{
			num: 65,
			exists: "false"
		},
		{
			num: 64,
			exists: "false"
		},
		{
			num: 63,
			exists: "false"
		},
		{
			num: 62,
			exists: "false"
		},
		{
			num: 61,
			exists: "false"
		},
		{
			num: 60,
			exists: "false"
		},
		{
			num: 59,
			exists: "false"
		},
		{
			num: 58,
			exists: "false"
		},
		{
			num: 57,
			exists: "false"
		},
		{
			num: 56,
			exists: "false"
		},
		{
			num: 55,
			exists: "false"
		},
		{
			num: 54,
			exists: "false"
		},
		{
			num: 53,
			exists: "false"
		},
		{
			num: 52,
			exists: "false"
		},
		{
			num: 51,
			exists: "false"
		},
		{
			num: 50,
			exists: "false"
		},
		{
			num: 49,
			exists: "false"
		},
		{
			num: 48,
			exists: "false"
		},
		{
			num: 47,
			exists: "false"
		},
		{
			num: 46,
			exists: "false"
		},
		{
			num: 45,
			exists: "false"
		},
		{
			num: 44,
			exists: "false"
		},
		{
			num: 43,
			exists: "false"
		},
		{
			num: 42,
			exists: "false"
		},
		{
			num: 41,
			exists: "false"
		},
		{
			num: 40,
			exists: "false"
		},
		{
			num: 39,
			exists: "false"
		},
		{
			num: 38,
			exists: "false"
		},
		{
			num: 37,
			exists: "false"
		},
		{
			num: 36,
			exists: "false"
		},
		{
			num: 35,
			exists: "false"
		},
		{
			num: 34,
			exists: "false"
		},
		{
			num: 33,
			exists: "false"
		},
		{
			num: 32,
			exists: "false"
		},
		{
			num: 31,
			exists: "false"
		},
		{
			num: 30,
			exists: "false"
		},
		{
			num: 29,
			exists: "false"
		},
		{
			num: 28,
			exists: "false"
		},
		{
			num: 27,
			exists: "false"
		},
		{
			num: 26,
			exists: "false"
		},
		{
			num: 25,
			exists: "false"
		},
		{
			num: 24,
			exists: "false"
		},
		{
			num: 23,
			exists: "false"
		},
		{
			num: 22,
			exists: "false"
		},
		{
			num: 21,
			exists: "false"
		},
		{
			num: 20,
			exists: "false"
		},
		{
			num: 19,
			exists: "false"
		},
		{
			num: 18,
			exists: "false"
		},
		{
			num: 17,
			exists: "false"
		},
		{
			num: 16,
			exists: "false"
		},
		{
			num: 15,
			exists: "false"
		},
		{
			num: 14,
			exists: "false"
		},
		{
			num: 13,
			exists: "false"
		},
		{
			num: 12,
			exists: "false"
		},
		{
			num: 11,
			exists: "false"
		},
		{
			num: 10,
			exists: "false"
		},
		{
			num: 9,
			exists: "false"
		},
		{
			num: 8,
			exists: "false"
		},
		{
			num: 7,
			exists: "false"
		},
		{
			num: 6,
			exists: "false"
		},
		{
			num: 5,
			exists: "false"
		},
		{
			num: 4,
			exists: "false"
		},
		{
			num: 3,
			exists: "false"
		},
		{
			num: 2,
			exists: "false"
		},
		{
			num: 1,
			exists: "false"
		}
	];
});