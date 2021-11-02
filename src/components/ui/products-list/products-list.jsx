import React from 'react';
import ProductCard from '../product-card/product-card';
import styles from './product-list.module.scss';

function ProductList() {
  const ar = [1, 2, 3, 4, 5, 6];
  return (
    <ul className={styles.list}>
      {ar.map((item, i) => (
        <li key={item} className={styles.item}>
          <ProductCard />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
