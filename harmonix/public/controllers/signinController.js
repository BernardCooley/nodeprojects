myApp.controller('SignInController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	console.log("Sign in controller");

	$scope.logIn = function(username, password) {
		console.log("Sign in called");

		$http.get('/users/username/' + username).success(function(response) {
			if(response != null) {
				if(username == response.username && password == response.password) {
					console.log("Successful log in");
					$scope.navDisabled = true;
					console.log($scope.navDisabled);
					$location.path("/playSet");
				}
			} else {
				console.log("User not found: " + response);
			}
		});
	};
}]);