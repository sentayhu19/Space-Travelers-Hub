import * as actions from './action';

const initState = {
  rockets: [],
};
const rocketReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.FETCH_ROCKETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_ROCKETS_SUCCESS:
      return {
        loading: false,
        rockets: action.payload,
        error: '',
      };
    case actions.FETCH_ROCKETS_FAILURE:
      return {
        loading: false,
        rockets: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default rocketReducer;
