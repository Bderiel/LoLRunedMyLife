'use strict'
const api = require('express').Router();

api.use('/', require('./routes'))
api.use('/masteries', require('./routes/masteries'));

module.exports = api;
