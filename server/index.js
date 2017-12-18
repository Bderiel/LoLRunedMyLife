const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { resolve } = require('path');

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'node_modules')))
  .use(morgan('dev'))
  .use('/api', require('./api')) // Serve our api
  .use((err, req, res) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Listening on port 8000!');
});

