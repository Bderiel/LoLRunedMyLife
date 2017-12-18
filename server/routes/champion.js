const axios = require('axios');
const api = require('express').Router();

const apiKey = 'RGAPI-979d5855-9e4f-4635-b2cf-f7d80896a53d';

api.get('/', (req, res, next) => {
  res.send('hello');
});


api.get('/:id', (req, res, next) => {
  const summoner = req.params.id;
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${apiKey}`)
    .then(foundSummoner => foundSummoner.data.accountId)
    .then(id => axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}?api_key=${apiKey}`))
    .then(matchHistory => res.json(matchHistory.data))
    .catch(err => console.log(err));
});

api.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('There was an Express error.');
});

module.exports = api;

// axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${apiKey}`)
//   .then((res) => res.data.accountId)
//   .then(id => axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}?api_key=${apiKey}`))
//   .catch(err => console.log(err));
