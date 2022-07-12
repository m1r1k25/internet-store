import React from 'react';
import { useState } from 'react';
import styles from './CreateProduct.module.css'

const CreateProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState()

  return (
    <div className={styles.wrapper}>
      <p>Enter description about new product</p>
      <input 
        className={styles.input}
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />
      <input 
      className={styles.input}
        type="number"
        value={price} 
        onChange={e => setPrice(e.target.value)} 
        placeholder="Enter price"
      />
      <button>Add product</button>
    </div>
  );
};

export default CreateProduct;