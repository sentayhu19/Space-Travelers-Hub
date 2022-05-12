<<<<<<< HEAD
const ADD_RESERVATION = 'ADD_RESERVATION';
const DELETE_RESERVATION = 'DELETE_RESERVATION';
const GET_ROCKETS = 'GET_ROCKETS';
=======
const ADD_RESERVATION = './space-travelers/rockets/ADD_RESERVATION';
const DELETE_RESERVATION = './space-travelers/rockets/DELETE_RESERVATION';
const GET_ROCKETS = './space-travelers/rockets/GET_ROCKETS';
>>>>>>> all-feature

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
