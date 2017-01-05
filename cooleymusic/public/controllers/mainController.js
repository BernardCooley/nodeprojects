var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])

myApp.controller('MainController', function ($scope, $http){
	console.log("Main controller");
	$scope.isDisabled = true;
	$scope.show = true;
	$showLoginBtn = false;
	$scope.registerFormShow = true;
	$scope.registerStatusShow = false;
	$scope.loginBtn = false;
	$scope.successShow = false;
	$scope.failureShow = false;
	$scope.navShow = true;
});