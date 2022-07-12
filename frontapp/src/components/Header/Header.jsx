import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Internet-store</h1>
      <hr />
    </div>
  );
};

export default Header;