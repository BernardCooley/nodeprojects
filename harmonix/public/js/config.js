myApp.config(function ($routeProvider, $locationProvider) {     
	$routeProvider
	.when('/', {
		templateUrl : 'partials/signInRegisterPage.html',
		controller : 'MainController'
	})
	.when('/signIn', {
		templateUrl : 'partials/signInPage.html',
		controller : 'SignInController'
	})
	.when('/register', {
		templateUrl : 'partials/registerPage.html',
		controller : 'RegisterController'
	})
	.when('/playSet', {
		templateUrl : 'partials/playSetPage.html',
		controller : 'PlaySetController'
	})
	.when('/trackManagement', {
		templateUrl : 'partials/trackManagementPage.html',
		controller : 'TrackManagementController'
	})
	.when('/help', {
		templateUrl : 'partials/helpPage.html',
		controller : 'RegisterController'
	})
	.when('/registrationStatus', {
		templateUrl : 'partials/registrationStatusPage.html'
	})
	.when('/navigation', {
		templateUrl : 'partials/navigation.html'
	})
	.otherwise(
	{
		templateUrl : '<div>No Page</div>'
	});
})