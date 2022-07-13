import React from 'react';
import styles from './ProductItem.module.css'
import  pic from '../../images/no_product.png'

const ProductItem = () => {
  return (
    <div className={styles.wrapper}>
      <img alt="some img" src={pic}></img>
      <div className={styles.wrapperDescr}>
        <p>Samsung i100</p>
        <p>$ 49.99</p>
        <button className={styles.button}>Order</button>
      </div>
      
    </div>
  );
};

export default ProductItem;