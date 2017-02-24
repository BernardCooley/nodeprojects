myApp.controller('GigsController', function($scope, $http, $location) {
	console.log("Gigs controller");

	$scope.gigs = [
	  {
	    "date":"2015-05-23",
	    "venue":"Celtronic",
	    "location":"Derry, NI",
	    "details":"Celtronic festival"
	  },
	  {
	    "date":"2015-05-23",
	    "venue":"Celtronic",
	    "location":"Derry, NI",
	    "details":"Celtronic festival"
	  }
	]

});