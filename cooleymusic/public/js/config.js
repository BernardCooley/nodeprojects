myApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'views/home.html',
		controller : 'HomeController'
	})
	.when('/about', {
		templateUrl : 'views/about.html',
		controller : 'AboutController'
	})
	.when('/music', {
		templateUrl : 'views/music.html',
		controller : 'MusicController'
	})
	.when('/photos', {
		templateUrl : 'views/photos.html',
		controller : 'PhotosController'
	})
	.when('/videos', {
		templateUrl : 'views/videos.html',
		controller : 'VideosController'
	})
	.when('/gigs', {
		templateUrl : 'views/gigs.html',
		controller : 'GigsController'
	})
	.when('/contact', {
		templateUrl : 'views/contact.html',
		controller : 'ContactController'
	})
	.when('/releases', {
		templateUrl : 'views/releases.html',
		controller : 'ReleasesController'
	})
	.when('/messages', {
		templateUrl : 'views/messages.html',
		controller : 'MessagesController'
	})
	.when('/bookings', {
		templateUrl : 'views/bookings.html',
		controller : 'BookingsController'
	})
	.otherwise(
	{
		templateUrl : '<div>No Page</div>'
	});
})