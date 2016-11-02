myApp.controller('RegisterController', ['$scope', '$http', '$location', function($scope, $http, $location, $rootScope) {
	console.log("Register controller");

	$scope.addUser = function(user) {
		console.log("Add user called");
		$http.post('/users', {fname: user.fName, lname: user.lName, email: user.email, username: user.username, password: user.password}).success(function(response) {
			console.log("Add user response username: " + response.username);
		});

		this.validateRegistration(user.email);
	};

	$scope.validateEmail = function(email) {
		console.log("Validate existing email called");
		$http.get('/users/email/' + email).success(function(response) {
			if(response != null) {
				$scope.emailExistsMsg = response.email + " already exists";
			} else {
				$scope.emailExistsMsg = "";
			}
		});
	};

	$scope.validateUsername = function(username) {
		console.log("Validate existing username called");
		$http.get('/users/username/' + username).success(function(response) {
			if(response != null) {
				$scope.usernameExistsMsg = response.username + " already exists";
			} else {
				$scope.usernameExistsMsg = "";
			}
		});
	};

	$scope.validateRegistration = function(email) {
		$http.get('/users/email/' + email).success(function(response) {
			if(response != null) {
				console.log("Registration successful");
				$scope.registrationMsg = "Congratulations " + email + ". Registration successful";
				console.log($scope.registrationMsg);
				$location.path("/registrationStatus");
				// $showLoginBtn = true;
				$rootScope.loginBtn = true;
			} else {
				console.log("Registration not successful: " + response);
				$scope.registrationMsg = "Error with registration. Please try again or contact administrator.";
				console.log($scope.registrationMsg);
				$location.path("/registrationStatus");
			}
		});
	};
}]);