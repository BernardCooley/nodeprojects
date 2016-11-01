var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('tracks', ['tracks']);
var db1 = mongojs('setlist', ['setlist']);
var db2 = mongojs('users', ['users']);
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

	db1.setlist.find(function (err, docs) {
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
	db2.users.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.post('/setlist', function(req, res) {
	console.log(req.body);
	db1.setlist.insert(req.body, function(err, doc) {
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
	db1.setlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
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

app.get('/users/:email', function(req, res) {
	var email = req.params.email;
	console.log("Existing email validation: " + email);
	db2.users.findOne({email: email}, function(err, doc) {
		res.json(doc);
	});
});

// app.get('/users/:fname', function(req, res) {
// 	var fname = req.params.fname;
// 	console.log("Existing fname validation: " + fname);
// 	db2.users.findOne({fname: fname}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.get('/users/:username', function(req, res) {
// 	// console.log("User: " + user.username);
// 	var username = req.params.username;
// 	// console.log("User: " + username);
// 	db2.users.findOne({username: username}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

/*app.get('/users/:username', function(req, res) {
	var username = req.params.username;
	console.log(username);
	db2.users.findOne({username: username}, function(err, doc) {
		res.json(doc);
	});
});*/

app.put('/tracks/:id', function(req, res) {
	var id = req.params.id;
	console.log(req.body.Track);

	db.tracks.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {Artist: req.body.Artist, Title: req.body.Title, Key: req.body.Key}},
		new: true}, function(err, doc) {
			res.json(doc);
		});
});

app.listen(3000);
console.log("Server running on port 3000");