myApp.controller('MessagesController', function($scope, $http, $location) {
	console.log("Messages controller");

	var getMessages = function() {
		console.log("Messages requested");
		$http.get('/messages').success(function(response) {
			console.log("Messages response: " + response);
			$scope.messages = response;
		});
	};

	getMessages();




});