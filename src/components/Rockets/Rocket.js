import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReservation, deleteReservation } from '../../redux/rockets/action';
import './Rocket.css';

const Rocket = ({
  id, desc, name, img, reserv,
}) => {
  const dispatchAction = useDispatch();

  const reserve = () => dispatchAction(addReservation(id));
  const cancel = () => dispatchAction(deleteReservation(id));

  const reserveBtn = (<button type="button" id="reserveBtn" onClick={reserve} className="rocket-action">Reserve Rocket</button>);
  const deleteBtn = (<button type="button" id="cancelBtn" onClick={cancel} className="rocket-action-cancel">Cancel Reservation</button>);
  const reserved = (<mark id="reserved">Reserved</mark>);

    <div className="main-rocket" id={id}>
      <div className="rocket-img">
        <img src={img} alt={name} className="main-img" />
      </div>
      <div className="rocket-info">
        <h3 className="rocket-name">{name}</h3>
        <p className="rocket-desc">
          {(reserv) ? reserved : null }
          {' '}
          {desc}
        </p>
        {(reserv === false) ? reserveBtn : deleteBtn }
      </div>
    </div>;
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  // reserv: PropTypes.bool.isRequired,
};

export default Rocket;
