const db = require('../');
const Category = require('./category');
const Mastery = require('./mastery');

Category.hasMany(Mastery);
Mastery.belongsTo(Category);

module.exports = {
  Category,
  Mastery,
  db
}
