import React from 'react';
import Sorting from '../sorting/sorting';
import ProductList from '../../ui/products-list/products-list';

function CatalogBoard() {
  return (
    <div>
      <Sorting />
      <ProductList />
    </div>
  );
}

export default CatalogBoard;
