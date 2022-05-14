import axios from 'axios';
import * as actions from './action';

const stateInit = [];
const url = axios.create({ baseURL: 'https://api.spacexdata.com/v3/rockets' });

const rocketsReducer = (state = stateInit, action) => {
  let d;
  let x;
  switch (action.type) {
    case actions.ADD_RESERVATION: {
      const nextState = state.map((rocket) => (
        (rocket.id !== action.payload) ? rocket : { ...rocket, reserv: true }));
      d = nextState;
      return [...d];
    }
    case actions.GET_ROCKETS:
      d = action.payload;
      d.forEach((e) => {
        e.reserv = false;
      });
      return [...state, ...d];
    case actions.DELETE_RESERVATION:
      x = state.map((rocket) => (
        (rocket.id !== action.payload) ? rocket : { ...rocket, reserv: false }));
      return x;
    default:
      return state;
  }
};

export const getRocketList = () => (dispatch) => {
  url.get().then((res) => {
    dispatch(actions.getRockets(res.data));
  });
};

export default rocketsReducer;
