window.addEventListener('hashchange', function() {
	if (window.location.hash === '#startdjing') {
		dJingPage();
	}
	if (window.location.hash === '#tmanagement') {
		trackManagementPage();
	}
	if (window.location.hash === '#help') {
		helpPage();
	}
});

function dJingPage (element) {
	$(".trackManagement").hide();
	$(".help").hide();
	$(".startDJing").show();
}

function trackManagementPage (element) {
	$(".startDJing").hide();
	$(".help").hide();
	$(".trackManagement").show();
}

function helpPage (element) {
	$(".startDJing").hide();
	$(".trackManagement").hide();
	$(".help").show();
}

function homePage (element) {
	$(".startDJing").hide();
	$(".trackManagement").hide();
	$(".help").hide();
};



