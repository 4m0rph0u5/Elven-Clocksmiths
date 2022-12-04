import React from 'react';
import styles from '../components/style modules/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a className={styles.logo} href='#'>
        Elven Clockwork
      </a>

      <ul className={styles.navmenu}>
        <li>
          <a href='#'>Catalog</a>
        </li>
        {/* catalog will have doropdown menu and a down arrow next to it*/}
        <ul className={styles.dropdown}>
          {/* see if there is a built in html dropdown menu */}
          <li>
            <a href='#'>Wrist watches</a>
          </li>
          <li>
            <a href='#'>Pocket watches</a>
          </li>
        </ul>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
