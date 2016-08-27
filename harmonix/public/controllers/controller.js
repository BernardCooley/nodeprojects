var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from controller");

	// $scope.ngModelVar = searchText;
	$scope.toshow = 1;

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

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/tracks/' + id).success(function(response) {
			refreshSetlist();
			refreshTracks();
		});
	};

	$scope.removeFromSL = function(id, err) {
		console.log(id);
		$http.delete('/setlist/' + id).success(function(response) {
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

	$scope.show_me = function (event) {
		var box = event.target.parentElement;
		var article = angular.element(box).find('article');
		var articles = angular.element(box.parentElement).find('article');
        // if already shown, hide it
        if (article.hasClass('show'))
        	article.removeClass('show');
        else // elsif not shown, hide all and show it
        {
        	articles.removeClass('show');
        	article.addClass('show');
        }
    };
}]);