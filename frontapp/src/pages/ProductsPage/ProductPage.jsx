import React from 'react';
import CreateProduct from '../../components/CreateProduct/CreateProduct';
import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './ProductPage.module.css'

const ProductPage = () => {
  return (
    <div>
      <CreateProduct />
      <div className={styles.wrapperProduct}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductPage;