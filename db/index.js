'use strict'
const Sequelize = require('sequelize');

const connectionString = `postgres://localhost:5432/lolrunedmylife`;

console.log(`Opening database connection to ${connectionString}`);

// create the database instance that can be used in other database files
module.exports = new Sequelize(connectionString, {});

// run our models file (makes all associations for our Sequelize objects)
require('./models');
