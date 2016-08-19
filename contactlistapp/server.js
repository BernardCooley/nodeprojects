var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);


app.use(express.static(__dirname = '\public'));

app.get('/contactlist', function (req, res) {
	console.log("I recieved a get request");

// var cursor = db.contactlists.find({});
var cursor = db.collection('contactlists').find( );
	cursor.each(function(err, docs) {
	console.log(docs);
		res.json(docs);
	});

	// db.contactlists.find().toArray(function (err, docs) {
	// 	console.log(docs);
	// 	res.json(docs);
	// });

});

app.listen(3000);
console.log("Server running on port 3000");