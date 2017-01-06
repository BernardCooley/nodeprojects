var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'angulike'])

myApp.controller('MainController', ['$scope', '$http', '$location', function ($scope, $http, $location){
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

	$scope.changePage = function(page) {
		console.log(page);
		if(page == 'home') {
			$location.path('/');
		} else {
			$location.path('/' + page);
		}
		
	};

}]);