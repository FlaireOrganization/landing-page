var mysql = require('mysql');
var dbconfig = require('./config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);
connection.query('USE ' + dbconfig.database);

/* CREATE USER TABLE IF IT DOESN'T ALREADY EXIST*/
connection.query('CREATE TABLE IF NOT EXISTS users \
  (id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT, \
  name VARCHAR(255) NOT NULL, \
  email VARCHAR(255) NOT NULL, \
  professional BOOLEAN DEFAULT NULL,\
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP );'
);

console.log('DATABASE CREATED!');
