import React from 'react';
import { useState } from 'react';
import styles from '../components/style modules/Navbar.module.css';

const Navbar = () => {
  // const [showDropdown, setShowDropDown] = useState(false);

  return (
    <>
      <div className={styles.nav_container}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <a href='#'>Elven Clockwork</a>
          </div>

          <ul className={styles.navmenu}>
            <li className={styles.catalog}>
              <a href='#'>Catalog</a>
              <div className={styles.dropdown_background}></div>
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
