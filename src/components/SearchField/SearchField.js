import clsx from 'clsx';
import styles from './SearchField.module.scss';

function SearchField() {
  return (
    <div className={styles.wrapper}>
      <input className='form-control' type='text' placeholder='Szukaj...' />
      <button className={clsx(styles.button, 'btn', 'btn-primary')} type='button'>
        Szukaj
      </button>
    </div>
  );
}

export default SearchField;
