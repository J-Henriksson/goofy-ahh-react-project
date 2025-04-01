import React from 'react';
import Navbar from '../components/Navbar';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <header className={styles.headerText}>
        <h1>Welcome to Mattefysik Prep</h1>
      </header>
      <main className={styles.mainContent}>
        <p>
          This platform is designed to help you prepare for the Swedish Mattefysikprovet.
        </p>
      </main>
    </div>
  );
};

export default Home;


