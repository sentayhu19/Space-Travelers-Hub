export const ADD_RESERVATION = 'ADD_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';
export const GET_ROCKETS = 'GET_ROCKETS';

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const deleteReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});
