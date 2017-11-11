import axios from 'axios';

const GET_MASTERIES = 'GET_MASTERIES';

const getMasteries = masteries => ({ type: GET_MASTERIES, masteries });

export default function (state = [], action) {
  switch (action.type) {
    case GET_MASTERIES:
      return action.masteries;
    default:
      return state;
  }
}

export const fetchMasteries = () => (dispatch) => {
  axios.get('http://ddragon.leagueoflegends.com/cdn/7.22.1/data/en_US/mastery.json')
    .then(res => dispatch(getMasteries(res.data)))
    .catch(err => console.log(err));
};
