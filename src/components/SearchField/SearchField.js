import clsx from 'clsx';
import { useState } from 'react';
import styles from './SearchField.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
  searchHotel: PropTypes.func.isRequired,
};

function SearchField({ searchHotel }) {
  const [term, setTerm] = useState('');

  const searchHandler = () => {
    searchHotel(term);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') searchHandler();
  };

  return (
    <div className={styles.wrapper}>
      <input className='form-control' type='text' placeholder='Szukaj...' onChange={(e) => setTerm(e.target.value)} onKeyDown={handleKeyDown} />
      <button className={clsx(styles.button, 'btn', 'btn-primary')} type='button' onClick={searchHandler}>
        Szukaj
      </button>
    </div>
  );
}

SearchField.propTypes = propTypes;

export default SearchField;
