import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './index.scss';
import dataSlice from './store/data-slice/data-slice';
import cartSlice from './store/cart-slice/cart-slice';
import { App } from './components/app/app';

const store = configureStore({
  reducer: {dataSlice, cartSlice},
});


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
