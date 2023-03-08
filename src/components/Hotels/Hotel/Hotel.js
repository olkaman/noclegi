import clsx from 'clsx';
import img from '../../../assets/images/hotel1.jpg';
import styles from './Hotel.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

function Hotel({ name, location, rating, description, theme }) {
  return (
    <div className={styles.hotelWrapper}>
      <div className={styles.pictureAndInfo}>
        <img src={img} alt='' />
        <div className={styles.wrapper}>
          <div className={styles.hotelData}>
            <div>
              <h3>{name}</h3>
              <div className={styles.location}>{location}</div>
            </div>
            <div className={styles.rating}>Ocena: {rating}</div>
          </div>
          <div className={styles.description}>{description}</div>
          <button type='button' className={`btn btn-${theme}`}>
            Więcej
          </button>
        </div>
      </div>
    </div>
  );
}

Hotel.propTypes = propTypes;

export default Hotel;
