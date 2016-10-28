myApp.controller('TrackManagementController', ['$scope', '$http', function($scope, $http) {
	console.log("Track management controller");

	var refreshSetlist = function() {
		$http.get('/setlist').success(function(response) {
			console.log("I got the data i requested");
			$scope.setlist = response;
			$scope.setTrack = "";
		});
	};

	var refreshTracks = function() {
		$http.get('/tracks').success(function(response) {
			console.log("I got the data i requested");
			$scope.tracks = response;
			$scope.track = "";
		});
	};

	refreshSetlist();
	refreshTracks();
	$scope.showBtn = true;
	$scope.hideBtn = false;

	$scope.addtrack = function() {
		console.log($scope.track);
		$http.post('/tracks', $scope.track).success(function(response) {
			console.log(response);
			refreshSetlist();
			refreshTracks();
		});
	};

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/tracks/' + id).success(function(response) {
			refreshSetlist();
			refreshTracks();
		});
	};

	$scope.edit = function(id) {
		console.log(id);
		$http.get('/tracks/' + id).success(function(response) {
			$scope.track = response;
			console.log(response);
			$scope.showBtn = false;
			$scope.hideBtn = true;
		});
	};

	$scope.update = function() {
		console.log($scope.track._id);
		$http.put('/tracks/' + $scope.track._id, $scope.track).success(function(response) {
			$scope.showBtn = true;
			$scope.hideBtn = false;
			refreshSetlist();
			refreshTracks();
		});
	};

	$scope.deselect = function() {
		$scope.track = "";
		$scope.showBtn = true;
		$scope.hideBtn = false;
	};
}]);