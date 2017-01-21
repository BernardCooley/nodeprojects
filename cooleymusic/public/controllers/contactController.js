myApp.controller('ContactController', function($scope, $http, $location) {
	console.log("Contact controller");

	$scope.sendMessage = function(contact) {
		console.log("send message called: " + contact.name);
		
	};



});