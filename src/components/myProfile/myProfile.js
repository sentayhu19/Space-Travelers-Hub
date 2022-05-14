import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';
import { generate } from 'randomized-string';

const MyProfile = () => {
  const Joined = useSelector((state) => state.missionReducer);
  const rockets = useSelector((state) => state.rocketsReducer);
  const { missions, joinedMissions } = Joined;
  const YouJoined = missions.filter((ids, i) => ids.mission_id === joinedMissions[i]);
  const rocketReserved = rockets.filter((r) => r.reserv === true);

  const uniqueIds = [];

  const unique = rocketReserved.filter(element => {
    const isDuplicate = uniqueIds.includes(element.rocket_name);
  
    if (!isDuplicate) {
      uniqueIds.push(element.rocket_name);
  
      return true;
    }
  
    return false;
  });
  console.log('before filer', rocketReserved)
console.log("after fil Data -> ",uniqueIds)

  return (
    <>
      <div className="joined wrap">
        <div className="missions">
          <div className="heading-title">
            <h2 className="mission-title">My Missions</h2>
            <h2 className="reserve">My Rockets </h2>
          </div>
          <div className="joined-missions">
            <table className="joined-mission-table1">
              <tbody key={generate()}>
                {YouJoined.map((j) => (

                  <tr key={generate()}>
                    <td key={generate()}>
                      <p className="joined-mission" key={generate()}>{j.mission_name}</p>
                    </td>
                  </tr>

                ))}

              </tbody>
            </table>

            <table className="joined-mission-table1">
              <tbody key={generate()}>
                {uniqueIds.map((r) => (
                  <tr key={generate()}>
                    <td key={generate()}>
                      <p className="joined-mission" key={generate()}>{r}</p>
                    </td>
                  </tr>

                ))}

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
