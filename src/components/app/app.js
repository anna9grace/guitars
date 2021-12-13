import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppRoutes } from '../../const';
import CatalogPage from '../pages/catalog-page/catalog-page';
import CartPage from '../pages/cart-page/cart-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import MainPage from '../pages/main-page/main-page';


function App() {
  return (
    <Switch>
      <Route exact path={AppRoutes.ROOT}>
        <MainPage />
      </Route>
      <Route exact path={AppRoutes.CATALOG}>
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
