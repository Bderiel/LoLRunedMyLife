const axios = require('axios');
const api = require('express').Router();

const apiKey = 'RGAPI-979d5855-9e4f-4635-b2cf-f7d80896a53d'; // test key

api.get('/', (req, res, next) => {
  res.send('hello');
});

api.get('/:id', (req, res, next) => {
  const summoner = req.params.id;
  let matchHistoryToSend;
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${apiKey}`)
    .then(foundSummoner => foundSummoner.data.accountId)
    .then(id => axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}/recent?api_key=${apiKey}`))
    .then((matchHistory) => {
      const promArr = [];
      matchHistoryToSend = matchHistory.data.matches.slice(0, 5);
      matchHistoryToSend.forEach((match) => {
        promArr.push(axios.get(`https://na1.api.riotgames.com/lol/match/v3/matches/${match.gameId}?api_key=${apiKey}`));
      });
      return Promise.all(promArr)
        .then((foundMatches) => {
          foundMatches.map((match, i) => {
            const winningTeam = match.data.teams.filter(team => team.win === 'Win')[0].teamId;
            matchHistoryToSend[i].winner = winningTeam;
            matchHistoryToSend[i].map = match.data.gameMode;
          });
        });
    })
    .then(() => {
      res.json(matchHistoryToSend);
    })
    .catch(next);
});


module.exports = api;
