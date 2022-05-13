import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
// import { generate } from 'randomized-string';
// import { alphanumeric } from 'randomized-string/lib/types';
=======
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
>>>>>>> all-feature
import { getMission } from '../../redux/missions/action';

import Mission from './mission';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, []);
  const { missions, fetcherror, joinedMissions } = useSelector((state) => state.missionReducer);
  const checkIsJoined = (id) => {
    try {
      const x = joinedMissions.filter((ids) => ids === id);
      if (x[0] === id) {
        return true;
      }
    } catch (err) {
      dispatch(fetcherror());
    }
    return false;
  };
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
              IsJoined={checkIsJoined(mission.mission_id)}
<<<<<<< HEAD
              key={1}
=======
              key={generate({ charset: alphanumeric, length: 32 })}
>>>>>>> all-feature
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
