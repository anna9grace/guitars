import { NameSpace } from '../../const';
import { FilterGroups } from '../../const';

export const getGuitarFilters = (state) => state[NameSpace.FILTERS][FilterGroups.GUITAR_TYPE];
export const getStringFilters = (state) => state[NameSpace.FILTERS][FilterGroups.STRING_COUNT];
export const getPriceFilters = (state) => state[NameSpace.FILTERS][FilterGroups.PRICE];

