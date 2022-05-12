import React from 'react';
import PropTypes from 'prop-types';
import './mission.css';

const Mission = ({ missionName, id, description }) => (
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
      <button className="member" type="button">Not a mem</button>
    </td>
    <td>
      {' '}
      <button className="join" type="button" id={id}>
        Join Mission
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Mission;
