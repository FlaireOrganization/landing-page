var express = require('express');
var router = express.Router();
// var models  = require('../models');
var mySQL = require('mysql');
var dbconfig = require('../config/database');
var connection = mySQL.createConnection(dbconfig.connection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/subscribe', function(req, res) {
	connection.query('USE ' + dbconfig.database);
	var newUser = {
		name: req.body.name,
		email: req.body.email,
		professional: req.body.professional
	};
	connection.query(
		"INSERT INTO users SET ?", newUser, function(err, user){
		console.log('------------------------')
		console.log(user);
		// res.redirect('/success');
	})
	console.log('****DONE****DONE****DONE*****DONE******DONE****DONE****DONE****DONE****')

	// .then(function() {
	// 	res.redirect('/success');
	// 	console.log("Successfully created user")
	// });
});

module.exports = router;
