myApp.config(function ($routeProvider, $locationProvider) {     
	$routeProvider
	.when('/', {
		templateUrl : 'views/signInRegister.html',
		controller : 'MainController'
	})
	.when('/signIn', {
		templateUrl : 'views/signIn.html',
		controller : 'SignInController'
	})
	.when('/register', {
		templateUrl : 'views/register.html',
		controller : 'RegisterController'
	})
	.when('/playSet', {
		templateUrl : 'views/playSet.html',
		controller : 'PlaySetController'
	})
	.when('/trackManagement', {
		templateUrl : 'views/trackManagement.html',
		controller : 'TrackManagementController'
	})
	.when('/help', {
		templateUrl : 'views/help.html',
		controller : 'RegisterController'
	})
	.when('/registrationStatus', {
		templateUrl : 'views/registrationStatus.html'
	})
	.otherwise(
	{
		templateUrl : '<div>No Page</div>'
	});
})