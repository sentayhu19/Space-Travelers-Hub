/* eslint-disable  no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'randomized-string';

import { alphanumeric } from 'randomized-string/lib/types';
import { getMission } from '../../redux/missions/action';
import missionReducer from '../../redux/missions/reducers';
import Mission from './mission';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, []);
  const { missions, fetcherror } = useSelector((state) => state.missionReducer);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              missionName={mission.mission_name}
              id={mission.mission_id}
              description={mission.description}
              key={generate({ charset: alphanumeric, length: 32 })}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
