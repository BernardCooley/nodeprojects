var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'angulike'])

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

	$scope.addEmailAddress = function() {
		console.log("add email address");
		var email = $scope.user;
		console.log(email);
		$http.post('/mailing_list', email).success(function(response) {
				console.log(response);
			});
	};
});