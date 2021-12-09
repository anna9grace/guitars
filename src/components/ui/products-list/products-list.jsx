import React, { useEffect, useState } from 'react';
import ProductCard from '../product-card/product-card';
import styles from './product-list.module.scss';
import { getFilteredGuitars } from '../../../store/data-slice/selectors';
import { useSelector } from 'react-redux';
import { MAX_PRODUCTS_SHOWN } from '../../../const';
import Pagination from '../pagination/pagination';

const getGuitarsToShow = (index, guitars) => guitars.slice(index, Math.min(guitars.length, index + MAX_PRODUCTS_SHOWN));

function ProductList() {
  const guitars = useSelector(getFilteredGuitars);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  let guitarsToShow = getGuitarsToShow(startIndex, guitars);

  useEffect(() => {
    setCurrentPage(1);
    setStartIndex(0);
  }, [guitars]);

  useEffect(() => {
    guitarsToShow = getGuitarsToShow(startIndex, guitars);
  }, [startIndex]);

  const switchPageHandler = (page) => {
    setCurrentPage(+page);
    setStartIndex(+page * MAX_PRODUCTS_SHOWN - MAX_PRODUCTS_SHOWN);
  };

  return (
    <React.Fragment>
      <ul className={styles.list}>
        {guitarsToShow.map((item) => (
          <li key={item.id} className={styles.item}>
            <ProductCard guitarData={item}/>
          </li>
        ))}
      </ul>
      <Pagination guitarsCount={guitars.length} currentPage={currentPage} clickHandler={switchPageHandler}/>
    </React.Fragment>
  );
}

export default ProductList;
