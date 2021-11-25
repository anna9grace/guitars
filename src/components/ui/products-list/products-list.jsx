import React, { useEffect, useState } from 'react';
import ProductCard from '../product-card/product-card';
import styles from './product-list.module.scss';
import { getFilteredGuitars } from '../../../store/data-slice/selectors';
import { useSelector } from 'react-redux';
import { MAX_PRODUCTS_SHOWN } from '../../../const';

function ProductList() {
  const guitars = useSelector(getFilteredGuitars);
  const [startIndex, setStartIndex] = useState(0);
  console.log(guitars);

  useEffect(() => {
    setStartIndex(0);
  }, [guitars]);

  // const onShowMoreClick = () => dispatch(getGuitarsRenderedCount());

  const guitarsToShow = guitars.slice(startIndex, Math.min(guitars.length, startIndex + MAX_PRODUCTS_SHOWN));

  return (
    <ul className={styles.list}>
      {guitarsToShow.map((item) => (
        <li key={item.id} className={styles.item}>
          <ProductCard guitarData={item}/>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
