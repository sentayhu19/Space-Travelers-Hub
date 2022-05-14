import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/reducers';
import rocketsReducer from './rockets/reducers';

const initState = {};
const rootReducer = combineReducers({
  missionReducer,
  rocketsReducer,
});

const store = createStore(rootReducer, initState, applyMiddleware(thunk));
export default store;
