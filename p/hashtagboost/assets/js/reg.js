toggleTerms = function(){
	$("#termsWindow").slideToggle('fast');
}

var app = angular.module("registerUser", []);

app.controller("mainCtrl", function($scope){
	$scope.user;
});