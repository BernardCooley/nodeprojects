myApp.controller('BookingsController', function($scope, $http, $location) {
	console.log("Bookings controller");

	var getBookings = function() {
		console.log("Bookings requested");
		$http.get('/bookings').success(function(response) {
			console.log("Bookings response: " + response);
			$scope.bookings = response;
		});
	};

	getBookings();




});