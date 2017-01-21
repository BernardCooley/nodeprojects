myApp.controller('ContactController', function($scope, $http, $location) {
	console.log("Contact controller");

	// $scope.sendMessage = function(contact) {
	// 	console.log("send message called: " + contact.email);
	// 	$http.get('http://localhost:3000/send', {to:contact.email, text:contact.message})
	// 	.success(function(data){
	// 		});
	// };

	// $scope.sendMessage = function(contact, err) {
	// 	console.log("send message called: " + contact.email);
	// 	$http.get('http://localhost:3000/send/' + contact).success(function(data){
	// 		});
	// };

	$scope.sendMessage = function(contact) {
		console.log("send message called: " + contact.email);
		$http.get('http://localhost:3000/send', {to:$scope.contact.email, 
			text:$scope.contact.message}).success(function(data){
			});
	};



});