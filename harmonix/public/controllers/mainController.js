var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])

myApp.controller('MainController', function ($scope, $http){
	console.log("Main controller");
	$scope.isDisabled = true;
	$scope.show = true;
	$scope.hide = true;
});