export const FETCHMISSION = 'FETCHMISSIONS';
export const FETCHERROR = 'FETCHERROR';
const axios = require('axios');

export const Url = axios.create({ baseURL: 'https://api.spacexdata.com/v3/missions' });

export const fetchMission = (mission) => ({
  type: FETCHMISSION,
  payload: mission,
});

export const fetchError = () => ({
  type: FETCHERROR,
});

export const getMission = () => (dispatch) => {
  Url.get().then((res) => {
    dispatch(fetchMission(res.data));
  }).catch(() => {
    dispatch(fetchError());
  });
};
