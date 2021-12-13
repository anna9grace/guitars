import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppRoutes } from '../../const';
import CatalogPage from '../pages/catalog-page/catalog-page';
import CartPage from '../pages/cart-page/cart-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';


function App() {
  return (
    <Switch>
      <Route exact path={AppRoutes.ROOT}>
        <CatalogPage />
      </Route>
      <Route exact path={AppRoutes.CART}>
        <CartPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export {App};
