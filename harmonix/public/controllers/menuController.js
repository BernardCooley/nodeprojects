myApp.controller('MenuController', function($scope, $http) {
		$scope.showNewSet = function(Title, err) {
		$http.get("/setList").success(function() {
			$scope.show = false;
			$scope.hide = false;
		});
		
	};
})