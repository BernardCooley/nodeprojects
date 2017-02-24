myApp.controller('ReleasesController', function($scope, $http, $location) {
	console.log("Releases controller");

	$scope.saleLinkClick = function(link) {
		console.log("Sale Link Click called");
		console.log(link);
		window.open(link);
	};

	$scope.releases = [
	  {
	    "title":"Slipstream",
	    "releaseDate":"2016-10-24",
	    "label":"Bacci Bros Records",
	    "mixes":["Original","thatboytim", "Luca Elle"],
	    "links":[{"Beatport":"https://www.beatport.com/release/slipstream-ep/1865301", 
	    	"Traxsource":"https://www.traxsource.com/title/695693/slipstream-ep",
	    	"Juno_Download":"http://www.junodownload.com/products/cooley-slipstream-ep/3232771-02/",
	    	"Amazon":"https://www.amazon.com/Slipstream-EP-Cooley/dp/B01M5BA8AS"}
	    	]

	  },
	  {
	    "title":"Imagination Land",
	    "releaseDate":"2016-05-02",
	    "label":"Bacci Bros Records",
	    "mixes":["Original","Warriors of the Dystotheque"],
	    "links":[{"Beatport":"https://www.beatport.com/release/imagination-land-ep/1762817", 
	    	"Traxsource":"https://www.traxsource.com/title/620790/imagination-land-ep",
	    	"Juno_Download":"http://www.junodownload.com/products/cooley-imagination-land-ep/3090080-02/",
	    	"Amazon":"https://www.amazon.com/Imagination-Land-EP-Cooley/dp/B01EZLMXH2"}
	    	]
	  },
	  {
	    "title":"Urban Deception",
	    "releaseDate":"2016-07-11",
	    "label":"Bacci Bros Records",
	    "mixes":["Original","Thran"],
	    "links":[{"Beatport":"https://www.beatport.com/release/urban-deception-ep/1796110", 
	    	"Traxsource":"https://www.traxsource.com/title/644147/urban-deception-ep",
	    	"Juno_Download":"http://www.junodownload.com/products/cooley-urban-deception-ep/3137702-02/",
	    	"Amazon":"https://www.amazon.com/Urban-Deception-EP-Cooley/dp/B01HJ42VB0"}
	    	]
	  }
	]


});