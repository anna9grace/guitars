import { createSlice } from '@reduxjs/toolkit';
import { guitars } from '../../mocks/guitars';

const initialState = {
  guitars: guitars,
  isDataLoaded: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setIsLoaded (state) {
      state.isDataLoaded = true;
    },
  },
});

export const {isDataLoaded} = dataSlice.actions;
export default dataSlice.reducer;
