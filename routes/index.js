var express = require('express');
var router = express.Router();
var mySQL = require('mysql');
var dbconfig = require('../config/database');
var connection = mySQL.createConnection(dbconfig.connection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET method for thank you message */


/* POST method for subscribing users */
router.post('/thankyou', function(req, res) {
	connection.query('USE ' + dbconfig.database);
	
	console.log(req.body)
	const FALSE = 0;
	const TRUE = 1;

	var newUser = {
		name: req.body.name,
		email: req.body.email,
		professional: FALSE
	};

	/* If there is a VALUE then set to TRUE */
	if (req.body.yes || req.body.professional=="value"){
		newUser.professional = TRUE
	};

	console.log(newUser)

	connection.query(
		"INSERT INTO users SET ?", newUser, function(err, user){
		console.log(user);
		// res.redirect('/thankyou');
	}).then(
		res.render('/thankyou'
	)
)

});

module.exports = router;
