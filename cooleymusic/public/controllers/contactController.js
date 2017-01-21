myApp.controller('ContactController', function($scope, $http, $location) {
	console.log("Contact controller");
		$scope.sendMessage = function() {
		console.log("send message called: " + $scope.contact.email);
		$http.post('http://localhost:3000/send', $scope.contact).success(function(data){
			});
	};



});