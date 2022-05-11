import {
  combineReducers, legacy_createStore as createStore, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/reducers';
import rocketReducer from './rockets/reducers';

const rootReducer = combineReducers({
  missionReducer,
  rocketReducer,
});

const store = createStore(rootReducer,
  applyMiddleware(thunk)); // creating store from the root reducer
export default store;
