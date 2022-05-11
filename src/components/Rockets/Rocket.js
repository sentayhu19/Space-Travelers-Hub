import PropTypes from 'prop-types';

const Rocket = ({
  id, desc, name, img,
}) => (
  <div id={id} className="rocketInfo flex-row">
    <div className="rocketImg"><img src={img} alt="Rocket" /></div>
    <div className="details flex-col">
      <h1>{name}</h1>
      <p>{desc}</p>
      <button type="button" className="reserveBtn">Reserve Rocket</button>
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
