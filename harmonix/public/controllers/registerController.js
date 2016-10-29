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
			console.log("I got the data i requested");
			if(response != null) {
				console.log("Email already exists");
			}
		});
	};
}]);