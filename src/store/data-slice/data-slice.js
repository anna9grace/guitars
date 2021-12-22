import { createSlice } from '@reduxjs/toolkit';
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
  guitars: [],
  filteredGuitars: [],
  sorting: initialSortState,
  filters: initialFiltersState,
  isDataLoaded: false,
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    loadGuitars (state, {payload}) {
      state.guitars = payload;
      state.filteredGuitars = sortGuitars(payload, initialSortState.type, initialSortState.direction);
      state.isDataLoaded = true;
    },
    changeDataStatus (state) {
      state.isDataLoaded = !state.isDataLoaded;
    },
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

export const {loadGuitars, changeDataStatus, setSortSettings, setFilters} = dataSlice.actions;
export default dataSlice.reducer;
