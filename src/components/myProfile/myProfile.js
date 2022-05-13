import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';
import { generate } from 'randomized-string';

const MyProfile = () => {
  const Joined = useSelector((state) => state.missionReducer);
  const { missions, joinedMissions } = Joined;
  const YouJoined = missions.filter((ids, i) => ids.mission_id === joinedMissions[i]);
  return (
    <>
      <div className="joined wrap">
        <div className="missions">
          <h2 className="mission-title">My Missions</h2>
          <div className="joined-missions">
            <table className="joined-mission-table">
              {YouJoined.map((j) => (
                <tbody key={generate()}>
                  <tr key={j.mission_id}>
                    <td key={j.mission_id}>
                      <p className="joined-mission" key={j.mission_id}>{j.mission_name}</p>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>

          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
