import React from 'react';
import { useState } from 'react';
import styles from '../components/style modules/Navbar.module.css';

const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar}>
          <a className={styles.logo} href='#'>
            Elven Clockwork
          </a>

          <ul className={styles.navmenu}>
            <li>
              <a href='#' className={styles.catalog}>
                Catalog
              </a>
            </li>
            <li>
              <a href='#' className={styles.about}>
                About
              </a>
            </li>
            <li>
              <a href='#' className={styles.contact}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.dropdown}>
        <ul>
          <li>
            <a href='#'>Wrist watches</a>
          </li>
          <li>
            <a href='#'>Pocket watches</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
