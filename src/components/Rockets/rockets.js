import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'randomized-string';
import Rocket from './Rocket';
import { getRocketList } from '../../redux/rockets/reducers';
import './Rockets.css';

const Rockets = () => {
  const dispatchAction = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    dispatchAction(getRocketList());
  }, []);
  console.log('Data: ', rockets);
  return (
    <div className="rockets-list">
      { rockets.map((rocket, i) => (

        <Rocket
          key={generate()}
          id={rocket.id}
          name={rocket.rocket_name}
          img={rocket.flickr_images[0]}
          desc={rocket.description}
          reserv={rocket.reserv}
          i={i}
        />
      )) }
    </div>
  );
};

export default Rockets;
