import styles from './Menu.module.scss';

function Menu({ theme }) {
  return (
    <ul className={styles.menu}>
      <li>
        <a href='#' className={`text-${theme}`}>
          Home
        </a>
      </li>
    </ul>
  );
}

export default Menu;
