import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            <FaHome className={styles.icon} />
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/past-tests"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Tidigare Test och Lösningar
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/practice"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Practice Mode
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/allmant-prov"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Allmänt om Provet
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Om Oss
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;