var myApp = angular.module('myApp', ['ngRoute', 'ngMessages'])

myApp.controller('MainController', function ($scope, $http, $rootScope){
	console.log("Main controller");
	console.log("Login button state: " + $rootScope.loginBtn);
	$scope.isDisabled = true;
	$scope.show = true;
	$scope.hide = true;
	$showLoginBtn = false;
});