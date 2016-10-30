myApp.controller('RegisterController', ['$scope', '$http', function($scope, $http) {
	console.log("Register controller");

	$scope.addUser = function(user) {
		console.log("Add user called");
		$http.post('/users', {fname: user.fName, lname: user.lName, email: user.email, username: user.username, password: user.password}).success(function(response) {
			console.log(response);
		});
	};

	$scope.validateEmail = function(email) {
		console.log("Validate email called");
		$http.get('/users/' + email).success(function(response) {
			if(response != null) {
				$scope.emailExistsMsg = response.email + " already exists";
			} else {
				$scope.emailExistsMsg = "";
			}
		});
	};

	// $scope.validateUsername = function(username) {
	// 	console.log("Validate username called");
	// 	$http.get('/users/' + username).success(function(response) {
	// 		console.log(response.username);
	// 		if(response != null) {
	// 			console.log(response.username + " already exists");
	// 			$scope.usernameExistsMsg = response.username + " already exists";
	// 		} else {
	// 			$scope.usernameExistsMsg = "";
	// 		}
	// 	});
	// };
}]);