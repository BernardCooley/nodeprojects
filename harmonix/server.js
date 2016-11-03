var express = require('express');
var app = express();
var mongojs = require('mongojs');
// var db = mongojs('tracks', ['tracks']);
// var db = mongojs('setlist', ['setlist']);
// var db = mongojs('users', ['users']);
var db = mongojs('harmonixDB', ['harmonixDB']);
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

app.get('/setlist', function (req, res) {
	console.log("I recieved a get request");

	db.setlist.find(function (err, docs) {
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

app.post('/users', function(req, res) {
	console.log(req.body);
	db.users.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.post('/setlist', function(req, res) {
	console.log(req.body);
	db.setlist.insert(req.body, function(err, doc) {
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

app.delete('/setlist/:id', function (req, res, err) {
	var id = req.params.id;
	console.log(id);
	db.setlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
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

// app.get('/users/email/:email', function(req, res) {
// 	var email = req.params.email;
// 	console.log("Existing email validation: " + email);
// 	db.users.findOne({email: email}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

app.get('/users/email/:email', function(req, res) {
	var email = req.params.email;
	console.log("Existing email validation: " + email);
	db.users.findOne({email: email}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/users/fname/:fname', function(req, res) {
	var fname = req.params.fname;
	console.log("Existing fname validation: " + fname);
	db.users.findOne({fname: fname}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/users/username/:username', function(req, res) {
	var username = req.params.username;
	console.log("User: " + username);
	db.users.findOne({username: username}, function(err, doc) {
		res.json(doc);
	});
});

app.post('/newCollection', function(req, res) {
	console.log("New collection body " + req);
	db.createCollection("Cooley", function(err, collection){
	   if (err) throw err;

	   	console.log("Cooley" + " created");
	 	console.log(collection);
	});
});

app.listen(3000);
console.log("Server running on port 3000");