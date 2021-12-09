import { createSlice } from '@reduxjs/toolkit';
import { guitars } from '../../mocks/guitars';
import { SortSettings, FiltersGroups } from '../../const';
import { sortGuitars, filterGuitars } from '../../util';

const initialSortState = {
  type: SortSettings.type.PRICE,
  direction: SortSettings.direction.UP,
};

const initialFiltersState = {
  [FiltersGroups.PRICE]: ['', ''],
  [FiltersGroups.GUITAR_TYPE]: [],
  [FiltersGroups.STRING_COUNT]: [],
};

const initialState = {
  guitars: guitars,
  filteredGuitars: sortGuitars(guitars, initialSortState.type, initialSortState.direction),
  sorting: initialSortState,
  filters: initialFiltersState,
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setSortSettings (state, {payload: {sortType, value}}) {
      state.sorting[sortType] = value;
      state.filteredGuitars = sortGuitars(state.filteredGuitars, state.sorting.type, state.sorting.direction);
    },
    setFilters (state, {payload}) {
      state.filters = payload;
      const filteredGuitars = filterGuitars(state.guitars, state.filters);
      state.filteredGuitars = sortGuitars(filteredGuitars, state.sorting.type, state.sorting.direction);
    },
  },
});

export const {setSortSettings, setFilters} = dataSlice.actions;
export default dataSlice.reducer;
