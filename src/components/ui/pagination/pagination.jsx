import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../button/button';
import styles from './pagination.module.scss';
import { MAX_PRODUCTS_SHOWN } from '../../../const';

const FIRST_PAGE = 1;

function Pagination({guitarsCount, currentPage, clickHandler}) {
  const totalPages = Math.ceil(guitarsCount / MAX_PRODUCTS_SHOWN);
  const pages = new Array(totalPages).fill().map((page, index) => index + 1);
  const isFirstPageActive = currentPage === FIRST_PAGE;
  const isLastPageActive = currentPage === totalPages;

  if (totalPages === FIRST_PAGE) {
    return <div></div>;
  }

  const renderFullPagination = () => (
    pages.map((page) => (
      <Button
        key={page}
        data-page-number={page}
        className={classNames(styles.button, page === currentPage && styles.active)}
        onClick={(evt) => clickHandler(evt.target.textContent)}
        disabled={page === currentPage}
      >
        {page}
      </Button>
    ))
  );


  return (
    <div className={styles.wrapper}>
      {totalPages > 1 &&
        <Button
          className={classNames(styles.button, styles.first, isFirstPageActive && 'hidden')}
          onClick={() => clickHandler(currentPage - 1)}
        >
          Назад
        </Button>}

      {renderFullPagination()}

      {totalPages > 1 &&
        <Button
          className={classNames(styles.button, styles.last, isLastPageActive && 'hidden')}
          onClick={() => clickHandler(currentPage + 1)}
        >
          Далее
        </Button>}
    </div>
  );
}

Pagination.propTypes = {
  guitarsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Pagination;
