var Sequelize = require('sequelize');

var connection = new Sequelize('landingpage', 'tanny', 'tanny', {
	host: 'localhost',
	dialect: 'sqlite',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

connection
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });


module.exports = connection;