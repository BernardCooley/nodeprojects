myApp.controller('ReleasesController', function($scope, $http, $location) {
	console.log("Releases controller");

	$scope.releases = [
	  {
	    "title":"Slipstream",
	    "releaseDate":"2016-10-24",
	    "label":"Bacci Bros Records",
	    "mixes":["Original","thatboytim", "Luca Elle"],
	    "links":[{"Beatport":"https://www.beatport.com/release/slipstream-ep/1865301", 
	    	"Traxsource":"https://www.traxsource.com/title/695693/slipstream-ep",
	    	"Juno Download":"http://www.junodownload.com/products/cooley-slipstream-ep/3232771-02/",
	    	"Amazon":"https://www.amazon.com/Slipstream-EP-Cooley/dp/B01M5BA8AS"}
	    	]

	  },
	  {
	    "title":"Self Portrait",
	    "releaseDate":"2017-03-06",
	    "label":"Bacci Bros Records",
	    "mixes":["Original","Luca Elle"]
	  }
	]


});