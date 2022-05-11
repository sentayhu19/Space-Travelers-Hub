import axios from 'axios';

// Action types
export const FETCH_ROCKETS_REQUEST = 'FETCH_ROCKETS_REQUEST';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';

// Action Creators
const fetchRocketsRequest = () => ({
  type: FETCH_ROCKETS_REQUEST,
});

const fetchRocketsSuccess = (rockets) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload: rockets,
});

const fetchRocketsFailure = (error) => ({
  type: FETCH_ROCKETS_FAILURE,
  payload: error,
});

export const fetchRockets = () => (dispatch) => {
  dispatch(fetchRocketsRequest);
  axios.get('https://api.spacexdata.com/v3/rockets')
    .then((response) => {
      const rockets = response.data;
      dispatch(fetchRocketsSuccess(rockets));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchRocketsFailure(errorMsg));
    });
};

export default fetchRockets;
