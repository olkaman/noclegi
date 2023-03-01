import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
  hotels: PropTypes.array.isRequired,
};

function Hotels(props) {
  const { hotels } = props;
  console.log(hotels);
  return (
    <div>
      <h2 className={styles.header}>Oferta:</h2>
      {hotels.map((hotel) => (
        <Hotel key={hotel.id} {...hotel} />
      ))}
    </div>
  );
}

Hotels.propTypes = propTypes;

export default Hotels;
