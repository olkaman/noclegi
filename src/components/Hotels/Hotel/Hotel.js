import clsx from 'clsx';
import img from '../../../assets/images/hotel1.jpg';
import styles from './Hotel.module.scss';

function Hotel() {
  return (
    <div className={clsx(styles.hotelWrapper, 'container')}>
      <div className={styles.pictureAndInfo}>
        <img src={img} alt='' />
        <div className={styles.wrapper}>
          <div className={styles.hotelData}>
            <div>
              <h3>Hotel name</h3>
              <div className={styles.location}>Warszawa</div>
            </div>
            <div className={styles.rating}>Ocena: 8,9</div>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
          <button type='button' className='btn btn-primary'>
            Więcej
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
