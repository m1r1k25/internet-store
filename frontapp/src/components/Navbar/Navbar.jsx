import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.wrapperNavbar}>
      <h2 className={styles.title}>Navigation</h2>
      <div className={styles.linkWrapper}>
        <NavLink to='/profile' className={navData => navData.isActive ? styles.active : styles.item}>Products</NavLink>
      </div>
      <div>
        <NavLink to='/cart' className={navData => navData.isActive ? styles.active : styles.item}>Shopping cart</NavLink>
      </div>
  </nav>
  );
};

export default Navbar;