import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.menuContainer}>
        <button onClick={toggleMenu} className={styles.menuButton}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/past-tests" onClick={() => setIsOpen(false)}>View Past Tests</Link>
            </li>
            <li className={styles.dropdownItem}>
              <Link to="/practice" onClick={() => setIsOpen(false)}>Practice Mode</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;

