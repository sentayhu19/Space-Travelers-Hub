import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRocketList } from '../../redux/rockets/reducers';

const Rockets = () => {
  const dispatchAction = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
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
        />
      )) }
    </div>
  );
};

export default Rockets;
