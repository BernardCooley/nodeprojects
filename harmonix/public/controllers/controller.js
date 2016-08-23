var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from controller");

	var refresh = function() {
		$http.get('/tracks').success(function(response) {
			console.log("I got the data i requested");
			$scope.tracks = response;
			$scope.track = "";
		});
	};

	refresh();

	$scope.addtrack = function() {
		console.log($scope.track);
		$http.post('/tracks', $scope.track).success(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/tracks/' + id).success(function(response) {
			refresh();
		});
	};

	$scope.edit = function(id) {
		console.log(id);
		$http.get('/tracks/' + id).success(function(response) {
			$scope.track = response;
		});
	};

	$scope.update = function() {
		console.log($scope.track._id);
		$http.put('/tracks/' + $scope.track._id, $scope.track).success(function(response) {
			refresh();
		});
	};

	$scope.deselect = function() {
		$scope.track = "";
	};

	$scope.dJingPageVis = function(dJingPageVis) {
		$scope.dJingPageVis = false;
		$scope.managementPageVis = true;
		$scope.helpPageVis = true;
	};

	$scope.managementPageVis = function(managementPageVis) {
		$scope.dJingPageVis = true;
		$scope.managementPageVis = false;
		$scope.helpPageVis = true;
	};

	$scope.helpPageVis = function(helpPageVis) {
		$scope.dJingPageVis = true;
		$scope.managementPageVis = true;
		$scope.helpPageVis = false;
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

    $scope.updateSet = function() {
		console.log("Add track button clicked");

		$http.updateSet('/tracks/' + $scope.track._id, $scope.track).success(function(response) {
			refresh();
		});


		// $http.put('/tracks/' + $scope.track._id, $scope.track).success(function(response) {
		// 	refresh();
		// });
	};

	$scope.clicked = function() {
		console.log("Clicked");
	};
	
	

}]);