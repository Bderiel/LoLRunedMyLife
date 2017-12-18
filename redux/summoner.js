import axios from 'axios';
import { Actions } from 'react-native-router-flux';


// https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Acampingburger?api_key=RGAPI-36929bb9-94a3-449a-b7b7-f27f6124ee9f

const GET_MATCHES = 'GET_MATCHES';

const getMatches = matches => ({ type: GET_MATCHES, matches });

export default function (state = [], action) {
  switch (action.type) {
    case GET_MATCHES:
      return action.matches;
    default:
      return state;
  }
}
// summoner= 'Acampingburger'
export const fetchMatches = summoner => (dispatch) => {
  axios.get(`http://192.168.29.194:8000/api/champion/${summoner}`)
    .then((matchHistory) => {
      console.log(matchHistory.data);
      return dispatch(getMatches(matchHistory.data));
    })
    .then(() => Actions.MatchHistory({ title: summoner }))
    .catch(err => console.log(err));
};
