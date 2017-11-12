import axios from 'axios';

const GET_CHAMPIONS = 'GET_CHAMPIONS';

const getChampions = champions => ({ type: GET_CHAMPIONS, champions });

export default function (state = [], action) {
  switch (action.type) {
    case GET_CHAMPIONS:
      return action.champions;
    default:
      return state;
  }
}

export const fetchChampions = () => (dispatch) => {
  axios.get('http://ddragon.leagueoflegends.com/cdn/7.22.1/data/en_US/champion.json')
    .then((res) => {
      dispatch(getChampions(res.data));
    })
    .catch(err => console.log(err));
};

