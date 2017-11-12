const Sequelize = require('sequelize');
const db = require('../');

const Mastery = db.define('mastery', {
  name: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  categoryId : {
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Mastery;
