import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = ({
  id, desc, name, img,
}) => (
  <div className="main-rocket" id={id}>
    <div className="rocket-img">
      <img src={img} alt={name} className="main-img" />
    </div>
    <div className="rocket-info">
      <h3 className="rocket-name">{name}</h3>
      <p className="rocket-desc">{desc}</p>
      <button type="button" className="rocket-action">Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
