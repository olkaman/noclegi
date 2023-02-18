import styles from './Menu.module.scss';

function Menu() {
  return (
    <ul className={styles.menu}>
      <li>
        <a href='#'>Home</a>
      </li>
    </ul>
  );
}

export default Menu;
