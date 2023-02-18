import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.scss';

function Hotels() {
  return (
    <div>
      <h2 className={styles.header}>Oferta:</h2>
      <Hotel />
      <Hotel />
    </div>
  );
}

export default Hotels;
