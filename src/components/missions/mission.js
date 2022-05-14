import React from 'react';
import PropTypes from 'prop-types';
import './mission.css';
import { useDispatch } from 'react-redux';
import { JoinMission, leaveMission } from '../../redux/missions/action';
const Mission = ({
  missionName, id, description, IsJoined,
}) => {
  const dispach = useDispatch();
  let val; let
    cname;
  if (IsJoined) {
    val = 'ACTIVE MEMEBER';
    cname = 'memeber';
  } else {
    val = 'NOT A MEMBER';
    cname = 'not-member';
  }
  return (
    <tr>
      <td>
        {' '}
        <p className="mission-name">{missionName}</p>
      </td>
      <td>
        {' '}
        <p className="mission-description">{description}</p>
      </td>
      <td>
        {' '}
        <button className={cname} type="button">{val}</button>
      </td>
      <td>
        {' '}
        {IsJoined ? (
          <button className="leave" type="button" id={id} onClick={() => dispach(leaveMission(id))}>
            Leave Mission
          </button>
        ) : (
          <button className="join" type="button" id={id} onClick={() => dispach(JoinMission(id))}>
            Join Mission
          </button>
        )}

      </td>
    </tr>
  );
};
Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  IsJoined: PropTypes.bool.isRequired,
};
export default Mission;

