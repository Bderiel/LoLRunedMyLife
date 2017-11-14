import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import masteries from './masteries';
import champions from './champions';
import summoner from './summoner'


const reducer = combineReducers({
  masteries, champions, summoner
});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));
const store = createStore(reducer, middleware);

export default store;

