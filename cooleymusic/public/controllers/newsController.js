myApp.controller('NewsController', function($scope, $http, $location) {
	console.log("News controller");

	$scope.newsContent = [
	  {
	    'date': "2017-02-23",
	    'contentTitle': "Lorem ipsum",
	    'content': "Lorem ipsum dolor sit amet, est ornare nec, diam porttitor in pede neque tristique porttitor, nec pharetra non sem duis, leo vel sed lacus suscipit. Vitae nunc aenean, enim laboriosam dictumst eget sed suspendisse, vitae suspendisse praesent, sapien est platea sollicitudin ac vestibulum dignissim. Dolor sapien lacus massa nihil integer est, nonummy eget, consectetuer ut tellus. Scelerisque ultricies est nulla mattis vitae morbi, ultricies in primis in amet, nec id ac sed sed ante placerat, lorem mollis posuere elit fermentum, quam pharetra integer aliquam porta vestibulum auctor. Sem mauris habitant sed, tempora in in tempor et sed wisi, vitae amet dui. Enim quam sit tellus ut, nulla donec a, integer velit. Nullam pede est quam, dolor quis sed sed ornare et, fugit neque ultricies elit, lectus ipsum lacus a augue."
	  },
	  {
	    'date': "2016-11-13",
	    'contentTitle': "Lorem ipsum",
	    'content': "Bibendum amet, tellus sit faucibus malesuada, nisl phasellus dis dui. Vel vestibulum neque aliquam metus duis lectus, faucibus cursus urna, quis ac semper sed wisi nunc lorem, vestibulum eu accumsan, maecenas lorem. Tincidunt ut tellus ullamcorper et, at ac tristique tempus nec eros, tristique neque in tincidunt faucibus adipiscing in, vitae leo lorem donec. Commodo quisque est eros nulla bibendum. Vitae integer sit dictum nec egestas. Suspendisse odio odio quam, culpa risus odio dui, erat id sed sollicitudin erat tristique, ultrices quisque metus. Integer facilisi a elit. Ac morbi vel ac felis curabitur est, et suspendisse, quis non lacinia eu. Ligula conubia neque nunc. A donec ullamcorper nulla pharetra eros."
	  },
	  {
	    'date': "2015-01-31",
	    'contentTitle': "Lorem ipsum",
	    'content': "Duis nullam nulla vestibulum ipsum, vel cras quam, eros sapien et vulputate odit ac ultricies, pede nunc ultricies wisi, minus tempus libero platea proin. Eros tellus in morbi ante dis tempus. Enim etiam orci ligula, dui laoreet, semper accumsan mollis velit euismod cras maecenas, tempus ridiculus a elit diam enim suspendisse, metus aliquam donec nam tortor sit fusce. Leo montes quam nascetur ante. Hendrerit natoque congue pharetra, vestibulum nunc non curabitur nullam, ante semper aliquam pede sit, est cum massa condimentum arcu lobortis erat. Pellentesque porttitor vehicula ut suscipit vestibulum, augue fringilla, est libero ad commodo, nulla arcu iaculis egestas laoreet. Enim luctus massa neque etiam pellentesque, ultrices eu. Gravida tellus amet, nibh proin quis ut vel, lacinia tincidunt arcu, urna integer, donec vulputate dui. Nisl justo tellus vehicula eros. Voluptatem bibendum, in ipsum interdum diam at tempus, donec commodo mi, amet posuere malesuada."
	  }
	]



});