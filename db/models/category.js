const Sequelize = require('sequelize');
const db = require('../');

const Category = db.define('category', {
  image: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Category;