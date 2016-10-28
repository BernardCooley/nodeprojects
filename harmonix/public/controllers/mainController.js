var myApp = angular.module('myApp', ['ngRoute'])

myApp.controller('MainController', function ($scope, $http){
	console.log("Main controller");
	$scope.show = true;
	$scope.hide = true;
});