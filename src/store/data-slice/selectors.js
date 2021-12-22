import { NameSpace } from '../../const';

export const getGuitars = (state) => state[NameSpace.DATA].guitars;
export const getFilteredGuitars = (state) => state[NameSpace.DATA].filteredGuitars;
export const getDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getSortSettings = (state) => state[NameSpace.DATA].sorting;
export const getFiltersSettings = (state) => state[NameSpace.DATA].filters;

