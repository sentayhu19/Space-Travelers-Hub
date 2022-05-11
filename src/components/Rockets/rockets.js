import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRocketList } from '../../redux/rockets/reducers';

const AllRockets = () => {
  const dispatchAction = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    dispatchAction(getRocketList());
  }, [dispatchAction]);

  return (
    rockets.map((rocket) => (
      <div key={rocket.id}>
        <Rocket
          id={rocket.id}
          name={rocket.name}
          img={rocket.img}
          desc={rocket.desc}
        />
      </div>
    ))
  );
};

export default AllRockets;

/*
  <div className="main-rocket" id="{rocket.id}">
    <div className="rocket-img">
      <img src="${rocket.flickr_images }" alt="Rocket Image" />
    </div>
    <div className="rocket-info">
      <h3 className="rocket-name">{rocket.rocket_name}</h3>
      <p className="rocket-desc">{rocket.description}</p>
      <button type="button" className="rocket-action">Reserve Rocket</button>
    </div>
  </div>;
*/
