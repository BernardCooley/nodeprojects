myApp.controller('LogInController', ['$scope', '$http', function($scope, $http) {
	console.log("Log in controller");

	$scope.logIn = function() {
		console.log("Log in called");
	};
	
}]);