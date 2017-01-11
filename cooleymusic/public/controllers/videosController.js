myApp.controller('VideosController', function($scope, $http, $location) {
	console.log("Videos controller");

	$scope.urlList = [
	//Ableton jam
	"https://www.youtube.com/embed/hja7OLQy3IQ",

	//Slipstream
	'https://www.youtube.com/embed/EivBI--j8Io',
	'https://www.youtube.com/embed/uhuF4Wp86lY',
	'https://www.youtube.com/embed/KsWDhgrBpIc',

	//Imagination Land
	'https://www.youtube.com/embed/6EjrdBd08VU',

	//Urban Deception
	'https://www.youtube.com/embed/PrnI1QCj7jM',

	//Tales of Lazarus
	'https://www.youtube.com/embed/_WyFbLsOoLo',
	
	//Escape from decadence
	'https://www.youtube.com/embed/FghcZLpnIb0',
	
	//30 min mix
	'https://www.youtube.com/embed/XEhRTNEfbu0',
	'https://www.youtube.com/embed/RAUqNkileO8',
	'https://www.youtube.com/embed/oC_AAHcxp2I',
	];
});