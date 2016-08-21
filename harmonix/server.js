var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('tracks', ['tracks']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname = '\public'));
app.use(bodyParser.json());

app.get('/tracks', function (req, res) {
	console.log("I recieved a get request");

	db.tracks.find(function (err, docs) {
		console.log(docs);
		res.json(docs);		
	});
});

app.post('/tracks', function(req, res) {
	console.log(req.body);
	db.tracks.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/tracks/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.tracks.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/tracks/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.tracks.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.put('/tracks/:id', function(req, res) {
	var id = req.params.id;
	console.log(req.body.Track);

	db.tracks.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {Track: req.body.Track, Title: req.body.Title, Key: req.body.Key}},
		new: true}, function(err, doc) {
			res.json(doc);
		});
});

app.listen(3000);
console.log("Server running on port 3000");