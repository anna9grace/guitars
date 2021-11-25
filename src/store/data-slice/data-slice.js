import { createSlice } from '@reduxjs/toolkit';
import { guitars } from '../../mocks/guitars';
import { sortSettings } from '../../const';

const initialState = {
  guitars: guitars,
  filteredGuitars: guitars,
  sorting: {
    type: sortSettings.type.PRICE,
    direction: sortSettings.direction.UP,
  },
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setSortSettings (state, {payload: {sortType, value}}) {
      state.sorting[sortType] = value;
    },
  },
});

export const {setSortSettings} = dataSlice.actions;
export default dataSlice.reducer;
