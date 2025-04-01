import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        ☰
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/past-tests" onClick={() => setIsOpen(false)}>View Past Tests</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/practice" onClick={() => setIsOpen(false)}>Practice Mode</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

