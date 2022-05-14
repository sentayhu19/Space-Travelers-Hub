import {
  FETCHMISSION, FETCHERROR, JOINMISSION, LEAVEMISSION,
} from './action';

const initState = {
  missions: [],
  fetcherror: false,
  reserve: false,
  joinedMissions: [],
};
const missionReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHMISSION:
      return {
        ...state,
        missions: action.payload,
      };
    case FETCHERROR:
      return {
        ...state,
        fetcherror: true,
      };
    case JOINMISSION:
      return {
        ...state,
        joinedMissions: [...state.joinedMissions, action.payload],
        reserve: true,
      };
    case LEAVEMISSION:
      return {
        ...state,
        joinedMissions: [...state.joinedMissions.filter((ids) => ids !== action.payload)],
        reserve: false,
      };

    default:
      return state;
  }
};
export default missionReducer;
