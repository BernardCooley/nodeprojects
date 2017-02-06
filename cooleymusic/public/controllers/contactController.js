myApp.controller('ContactController', function($scope, $http, $location) {
	console.log("Contact controller");
		$scope.sendMessage = function() {
		console.log("send message called: " + $scope.contact.email);
		$http.post('http://localhost:3000/send', $scope.contact).success(function(data){
			});
	};

	$scope.validateContactEmail = function() {
		var checkboxState = $scope.check;
		console.log("Checkbox state: " + checkboxState);
		if(checkboxState) {
			var emailAddress = $scope.contact.email;
			console.log("Validate existing email called " + emailAddress);
			$http.get('/mailing_list/' + emailAddress).success(function(response) {
				console.log("Response: " + response);
				if(response == null || emailAddress == '') {
					console.log("Email: " + emailAddress);
					$http.post('/mailing_list', {email: emailAddress}).success(function(response) {
						console.log(response);
					});	
				}
			});
		}
	};
});