myApp.controller('ContactController', function($scope, $http, $location) {
	console.log("Contact controller");
		$scope.sendMessage = function() {
		$scope.successMessage = "Sending...";
		console.log("send message called: " + $scope.contact.email);
		$http.post('http://localhost:3000/send', $scope.contact).success(function(data){
			// console.log("Contact response: " + data);
				if(data == "sent") {
					$scope.successMessage = "Thank you for your interest";
					console.log("Contact form submitted");
					$scope.contact = null;
					$scope.check = false;
				}
			});
	};

	$scope.validateContactEmail = function() {
		var checkboxState = $scope.check;
		console.log("Checkbox state: " + checkboxState);
		if(checkboxState) {
			var emailAddress = $scope.contact.email;
			console.log("Validate existing email called " + emailAddress);
			$http.get('/mailing_list/' + emailAddress).success(function(response) {
				console.log("Email check response: " + response);
				if(response == null || emailAddress == '') {
					console.log("Email: " + emailAddress);
					$http.post('/mailing_list', {email: emailAddress}).success(function(response) {
						console.log("Contact response: " + response);
					});	
				}
			});
		}
	};
});