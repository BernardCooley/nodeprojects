myApp.controller('LogInController', ['$scope', '$http', function($scope, $http) {
	console.log("Log in controller");

	$scope.logIn = function(username, password) {
		console.log("Log in called");

		$http.get('/users/' + username).success(function(response) {
			if(response != null) {
				$scope.emailExistsMsg = response.email + " already exists";
			} else {
				$scope.emailExistsMsg = "";
			}
		});





	};
	
}]);