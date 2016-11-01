myApp.controller('RegisterController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	console.log("Register controller");

	$scope.addUser = function(user) {
		console.log("Add user called");
		$http.post('/users', {fname: user.fName, lname: user.lName, email: user.email, username: user.username, password: user.password}).success(function(response) {
			console.log("Add user response username: " + response.username);
		});

		this.validateRegistration(user.email);

		// console.log("Current email: " + user.email);
		// $http.get('/users/' + user.email).success(function(response) {
		// 	// console.log("Validate registration method called for: " + user.email);
		// 	if(response != null) {
		// 		console.log("Registration successful");
		// 		$scope.registrationMsg = "Congratulations " + user.email + ". Registration successful";
		// 		console.log(registrationMsg);
		// 	} else {
		// 		console.log("Registration not successful: " + response);
		// 		$scope.registrationMsg = "Error with registration. Please try again or contact administrator.";
		// 		console.log(registrationMsg);
		// 	}
		// });
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

	$scope.validateRegistration = function(email) {
		$http.get('/users/' + email).success(function(response) {
			if(response != null) {
				console.log("Registration successful");
				$scope.registrationMsg = "Congratulations " + email + ". Registration successful";
				console.log($scope.registrationMsg);
				$location.path("/registrationStatus");

			} else {
				console.log("Registration not successful: " + response);
				$scope.registrationMsg = "Error with registration. Please try again or contact administrator.";
				console.log($scope.registrationMsg);
				$location.path("/registrationStatus");
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