import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRocketList } from '../../redux/rockets/reducers';
import './Rockets.css';

const Rockets = () => {
  const dispatchAction = useDispatch();
  const { rockets, reserv } = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    console.log('Inside console.log');
    dispatchAction(getRocketList());
  }, [dispatchAction]);

  return (
    <div className="rockets-list">
      { rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          img={rocket.flickr_images[0]}
          desc={rocket.description}
          reserv={rocket.reserv}
        />
      )) }
    </div>
  );
};

export default Rockets;
