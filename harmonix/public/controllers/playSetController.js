myApp.controller('PlaySetController', ['$scope', '$http', function($scope, $http) {
	console.log("Play set controller");

	var refreshSetlist = function() {
		$http.get('/setlist').success(function(response) {
			console.log("Set list refreshed");
			$scope.setlist = response;
			$scope.setTrack = "";
		});
	};

	var refreshTracks = function() {
		$http.get('/tracks').success(function(response) {
			console.log("Tracks refreshed");
			$scope.tracks = response;
			$scope.track = "";
		});
	};

	refreshSetlist();
	refreshTracks();
	$scope.showBtn = true;
	$scope.hideBtn = false;

	$scope.addToSL = function(id) {
		$http.get('/tracks/' + id).success(function(response) {
			console.log(response);
			$http.post('/setlist', {Artist: response.Artist, Title: response.Title, Key: response.Key}).success(function(response) {
				console.log(response);
				refreshSetlist();
			});
			$scope.track = response.Key;
			console.log(response.Key);
		});
	};

	$scope.removeFromSL = function(id, err) {
		console.log(id);
		$http.delete('/setlist/' + id).success(function(response) {
			refreshSetlist();
			refreshTracks();
		});
	};
}]);