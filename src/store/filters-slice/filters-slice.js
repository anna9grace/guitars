import { createSlice } from '@reduxjs/toolkit';
import { FilterGroups } from '../../const';

const initialState = {
  [FilterGroups.PRICE]: [
    {
      name: 'min-price',
      label: 'Минимальная цена',
      value: '',
    },
    {
      name: 'max-price',
      label: 'Максимальная цена',
      value: '',
    },
  ],
  [FilterGroups.GUITAR_TYPE]: [
    {
      name: 'acoustic-type',
      label: 'Акустические гитары',
      value: false,
    },
    {
      name: 'electro-type',
      label: 'Электрогитары',
      value: true,
    },
    {
      name: 'ukulele-type',
      label: 'Укулеле',
      value: true,
    },
  ],
  [FilterGroups.STRING_COUNT]: [
    {
      name: 'four-string',
      label: '4 струны',
      value: true,
    },
    {
      name: 'six-string',
      label: '6 струн',
      value: true,
    },
    {
      name: 'seven-string',
      label: '7 струн',
      value: false,
    },
    {
      name: 'twelve-string',
      label: '12 струн',
      value: false,
    },
  ],
};


const filtersSlice = createSlice({
  name: 'filtersSlice',
  initialState,
  reducers: {
    setInputValue (state, {payload: {group, name, value}}) {
      const index = state[group].findIndex((field) => field.name === name);
      state[group][index].value = value;
    },
    setCheckboxValue (state, {payload: {group, name}}) {
      const index = state[group].findIndex((field) => field.name === name);
      state[group][index].value = !state[group][index].value;
    },
  },
});

export const {setInputValue, setCheckboxValue} = filtersSlice.actions;
export default filtersSlice.reducer;
