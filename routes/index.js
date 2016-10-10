var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/create', function(req, res) {
	models.User.create({
		name: req.body.name
	}).then(function() {
		res.redirect('/success');
		console.log("Successfully created user")
	});
});

module.exports = router;
