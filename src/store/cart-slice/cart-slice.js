import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goodsInCartCount: 0,
  guitarsInCart: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart (state, {payload}) {
      const index = state.guitarsInCart.findIndex((item) => item.id === payload.id);
      if (index >= 0) {
        state.guitarsInCart[index].quantity++;
      } else {
        state.guitarsInCart.push(payload);
      }
      state.goodsInCartCount++;
    },
    decreaseQuantityInCart (state, {payload}) {
      const index = state.guitarsInCart.findIndex((item) => item.id === payload.id);
      if (payload.quantity > 1) {
        state.guitarsInCart[index].quantity--;
      } else {
        state.guitarsInCart = state.guitarsInCart.filter((item) => item.id !== payload.id);
      }
      state.goodsInCartCount--;
    },
    removeFromCart (state, {payload}) {
      state.guitarsInCart = state.guitarsInCart.filter((item) => item.id !== payload.id);
      state.goodsInCartCount -= payload.quantity;
    },
  },
});

export const {addToCart, removeFromCart, decreaseQuantityInCart} = cartSlice.actions;
export default cartSlice.reducer;
