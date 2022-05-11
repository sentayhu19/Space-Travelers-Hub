/* eslint-disable  no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMission } from '../../redux/missions/action';
import missionReducer from '../../redux/missions/reducers';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
  const { missions, fetcherror } = useSelector((state) => state.missionReducer);
  return (
    <div>
      <p>
        {Missions}
      </p>
      Missions
    </div>
  );
};
export default Missions;
