import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            <FaHome className={styles.icon} />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/past-tests" className={styles.navLink}>
            Past Tests
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/practice" className={styles.navLink}>
            Practice Mode
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



