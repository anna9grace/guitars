import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './catalog-board.module.scss';

import Sorting from '../sorting/sorting';
import ProductList from '../../ui/products-list/products-list';
import { getFilteredGuitars } from '../../../store/data-slice/selectors';



function CatalogBoard({className}) {
  const guitars = useSelector(getFilteredGuitars);

  return (
    <div className={className}>
      <Sorting />
      {
        guitars.length < 1
          ? <p className={styles.empty}>Товары не найдены</p>
          : <ProductList />
      }
    </div>
  );
}

CatalogBoard.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CatalogBoard;
