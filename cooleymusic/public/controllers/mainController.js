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
	$scope.validationMsg = "Sign up to mailing list for updates";

	$scope.addEmailAddress = function(userEmail) {
		console.log("add email address");
		var email = $scope.userEmail;
		console.log(email);
		$http.post('/mailing_list', userEmail).success(function(response) {
				console.log(response);
			});
	};

	$scope.validateEmail = function(email, newsletterForm) {
		console.log("Validate existing email called " + email);
		$http.get('/mailing_list/' + email).success(function(response) {
			console.log("Response: " + response);
			if(response == null || email == '') {
				$scope.validationMsg = "Sign up to mailing list for updates";
				newsletterForm.emailAddress.$setValidity("unique", true);
			} else {
				$scope.validationMsg = "Email already exists";
				newsletterForm.emailAddress.$setValidity("unique", false);
			}
		});
	};

	$scope.successMessage = function() {
		console.log("Success message");
		$scope.validationMsg = "Success";
	};

	$scope.changeView = function(page) {
		console.log(page);
		if(page == 'home') {
			$location.path('/');
		} else {
			$location.path('/' + page);
		}
	};

	$scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
	};

	$scope.myModel = {
              Url: 'https://www.facebook.com/BCooleyMusic/',
              Name: "Cooley's new artist website.",
              ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
          };

}]);