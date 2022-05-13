import axios from 'axios';
import * as actions from './action';

const stateInit = [];
const url = axios.create({ baseURL: 'https://api.spacexdata.com/v3/rockets' });

const rocketsReducer = (state = stateInit, action) => {
  switch (action.type) {
    case actions.addReservation:
      return [
        ...state,
        action.payload,
      ];
    case actions.getRockets:
      return action.payload;
    case actions.deleteReservation:
      return state.filter((rocket) => rocket.id !== action.payload.id);
    default:
      return state;
  }
};
/*
export const getRocketList = () => async (dispatch) => {
  const rocketList = await fetch(`${url}`)
    .then((resp) => resp.json());
  const infoArr = [];
  rocketList.map((rocket) => infoArr.push({
    id: rocket.id,
    desc: rocket.description,
    name: rocket.rocket_name,
    img: rocket.flickr_images[0],
  }));
  dispatch(actions.getRockets(infoArr));
}; */

export const getRocketList = () => (dispatch) => {
  url.get().then((res) => {
    dispatch(actions.getRockets(res.data));
  });
};

export default rocketsReducer;
console.log(rocketsReducer);
