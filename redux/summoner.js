import axios from 'axios';

const apiKey = 'RGAPI-36929bb9-94a3-449a-b7b7-f27f6124ee9f'

//https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Acampingburger?api_key=RGAPI-36929bb9-94a3-449a-b7b7-f27f6124ee9f

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
//summoner= 'Acampingburger'
export const fetchMatches = (summoner) => (dispatch) => {
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${apiKey}`)
    .then(res =>{
        return res.data.accountId
    })
        .then(id => axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${id}?api_key=${apiKey}`))
        .then(matches => dispatch(getMatches(matches)))
        .catch(err => console.log(err));
};


