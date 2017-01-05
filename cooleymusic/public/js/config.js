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
	.otherwise(
	{
		templateUrl : '<div>No Page</div>'
	});
})