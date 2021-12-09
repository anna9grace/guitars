import React from 'react';
import styles from './catalog.module.scss';
import Filters from '../filters/filters';
import CatalogBoard from '../catalog-board/catalog-board';

function Catalog() {

  return (
    <div className={styles.wrapper}>
      <Filters />
      <CatalogBoard className={styles.guitars}/>
    </div>
  );
}

export default Catalog;
