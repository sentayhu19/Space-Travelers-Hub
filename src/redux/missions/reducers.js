import { FETCHMISSION, FETCHERROR } from './action';

const initState = {
  missions: [],
  fetcherror: false,
};
const missionReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHMISSION:
      return {
        missions: action.payload,
      };
    case FETCHERROR:
      return {
        fetcherror: true,
      };
    default:
      return state;
  }
};
export default missionReducer;
