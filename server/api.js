'use strict'
const api = require('express').Router();

api.use('/', require('./routes'))
api.use('/champion', require('./routes/champion'));

module.exports = api;
