var Sequelize = require('sequelize');
var connection = require('../config/database');

var User = connection.define('user', {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      isEmail: true,
      allowNull: false
    },
    professional: {
      type: Sequelize.BOOLEAN
    }
});

module.exports = User;