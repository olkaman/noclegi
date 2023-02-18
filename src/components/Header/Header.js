import SearchField from '../SearchField/SearchField';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <SearchField />
    </div>
  );
}

export default Header;
