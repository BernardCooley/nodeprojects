myApp.config(function ($routeProvider) {     
	$routeProvider
	.when('/', {
		templateUrl : 'partials/logInPage.html',
		controller : 'MainController'
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
		controller : 'HelpController'
	})
	.otherwise(
	{
		templateUrl : '<div>No Page</div>'
	});
})