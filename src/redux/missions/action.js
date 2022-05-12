export const FETCHMISSION = 'FETCHMISSIONS';
export const FETCHERROR = 'FETCHERROR';
export const JOINMISSION = 'JOINMISSION';
export const LEAVEMISSION = 'LEAVEMISSION';

const axios = require('axios');

export const Url = axios.create({ baseURL: 'https://api.spacexdata.com/v3/missions' });

export const fetchMission = (mission) => ({
  type: FETCHMISSION,
  payload: mission,
});

export const fetchError = () => ({
  type: FETCHERROR,
});
export const JoinMission = (payload) => ({
  type: JOINMISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVEMISSION,
  payload,
});

export const getMission = () => (dispatch) => {
  Url.get().then((res) => {
    dispatch(fetchMission(res.data));
  }).catch(() => {
    dispatch(fetchError());
  });
};
