import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goodsInCartCount: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setIsLoaded (state) {
      state.goodsInCartCount = 3;
    },
  },
});

export const {isDataLoaded} = cartSlice.actions;
export default cartSlice.reducer;
