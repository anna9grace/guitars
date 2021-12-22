import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './catalog-board.module.scss';

import Sorting from '../sorting/sorting';
import ProductList from '../../ui/products-list/products-list';
import Loader from '../../ui/loader/loader';
import { getDataStatus, getFilteredGuitars } from '../../../store/data-slice/selectors';

const renderBoard = (items) => (
  items.length < 1
    ? <p className={styles.empty}>Товары не найдены</p>
    : <ProductList />
);

function CatalogBoard({className}) {
  const guitars = useSelector(getFilteredGuitars);
  const isLoadingStatus = useSelector(getDataStatus);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => setIsLoading(isLoadingStatus), [isLoadingStatus]);

  return (
    <div className={className}>
      <Sorting />
      {
        !isLoading
          ? <Loader />
          : renderBoard(guitars)
      }
    </div>
  );
}

CatalogBoard.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CatalogBoard;
