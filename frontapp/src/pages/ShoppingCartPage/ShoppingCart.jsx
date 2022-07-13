import React from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './ShoppingCart.module.css'

const ShoppingCartPage = () => {
  return (
    <div className={styles.wrapper}>
      <ProductItem />
    </div>
  );
};

export default ShoppingCartPage;