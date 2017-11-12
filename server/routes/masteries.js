const api = require('express').Router();
const { Category, Mastery } = require('../../db/models')

api.get('/', (req, res, next) => {
  Mastery.findAll({ include: [{ all: true }] })
    .then(masteries => res.json(masteries))
    .catch(next)
})

api.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('There was an Express error.')
})

module.exports = api;