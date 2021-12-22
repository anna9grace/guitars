import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './index.scss';
import dataSlice from './store/data-slice/data-slice';
import cartSlice from './store/cart-slice/cart-slice';
import { App } from './components/app/app';
import { createApi } from './api';
import { fetchGuitars } from './store/api-actions';

export const api = createApi();

const store = configureStore({
  reducer: {dataSlice, cartSlice},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchGuitars());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
