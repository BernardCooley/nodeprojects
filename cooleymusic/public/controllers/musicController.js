myApp.controller('MusicController', function($scope, $http, $location) {
	console.log("Music controller");

	$scope.mixcloudMusic = [
	  	{
			"url":"https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FBernardCooley%2Fcooley-the-wired-show-nov-2016%2F&hide_cover=1&light=1"
	  	},
		{	
			"url":"https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FBernardCooley%2Fthatboy-tim-cooley-resonate-hoxton-fm-radio-01-09-2016%2F&hide_cover=1&light=1"
		},
		{	
			"url":"https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FBernardCooley%2Fcooley-vinyl-promo-mix-summer-16%2F&hide_cover=1&light=1"
		},
		{	
			"url":"https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FBernardCooley%2Fcooley-winter-2013-techno-mix%2F&hide_cover=1&light=1"
		},
		{	
			"url":"https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2FBernardCooley%2Fcooley-live-promo-sept-2012%2F&hide_cover=1&light=1"
	  	}
	];

	$scope.$on('scrollbar.show', function(){
      console.log('Scrollbar show');
    });
    $scope.$on('scrollbar.hide', function(){
      console.log('Scrollbar hide');
    });

});