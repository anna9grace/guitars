import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './filters.module.scss';
import Fieldset from '../../ui/fieldset/fieldset';
import Button from '../../ui/button/button';
import Input from '../../ui/input/input';
import { FiltersGroups, FiltersOptions } from '../../../const';
import { setFilters } from '../../../store/data-slice/data-slice';

const NUMBER_TEMPLATE = /^\d+$/;
const PriceOptions = FiltersOptions[FiltersGroups.PRICE];
const TypeOptions = FiltersOptions[FiltersGroups.GUITAR_TYPE];
const StringsOptions = FiltersOptions[FiltersGroups.STRING_COUNT];

const initialState = {
  [FiltersGroups.PRICE]: {
    [PriceOptions.MIN]: {
      label: 'Минимальная цена',
      value: '',
      placeholder: '1 000',
    },
    [PriceOptions.MAX]: {
      label: 'Максимальная цена',
      value: '',
      placeholder: '30 000',
    },
  },
  [FiltersGroups.GUITAR_TYPE]:  {
    [TypeOptions.ACOUSTIC]: {
      label: 'Акустические гитары',
      value: false,
    },
    [TypeOptions.ELECTRIC]: {
      label: 'Электрогитары',
      value: false,
    },
    [TypeOptions.UKULELE]: {
      label: 'Укулеле гитары',
      value: false,
    },
  },
  [FiltersGroups.STRING_COUNT]: {
    [StringsOptions.FOUR]: {
      label: '4 струны',
      value: false,
      isDisabled: false,
    },
    [StringsOptions.SIX]: {
      label: '6 струны',
      value: false,
      isDisabled: false,
    },
    [StringsOptions.SEVEN]: {
      label: '7 струны',
      value: false,
      isDisabled: false,
    },
    [StringsOptions.TWELVE]: {
      label: '12 струны',
      value: false,
      isDisabled: false,
    },
  },
};

const renderInput = (name, state, changeHandler, validationHandler) => (
  <Input
    type={'text'}
    id={name}
    name={name}
    value={state[name].value}
    placeholder={state[name].placeholder}
    onChange={(evt) => {
      const value = evt.target.value;
      if (value.match(NUMBER_TEMPLATE) || value === '') {
        const newState = {...state};
        newState[name].value = value;
        changeHandler(newState);
      }
    }}
    onBlur={validationHandler}
  >
    {state[name].label}
  </Input>
);

const renderCheckbox = (name, state, changeHandler) => (
  <Input
    type={'checkbox'}
    key={name}
    id={name}
    name={name}
    checked={state[name].isDisabled ? false : state[name].value}
    isLabelVisible
    disabled={state[name].isDisabled}
    onChange={() => {
      const newState = {...state};
      newState[name].value = !state[name].value;
      changeHandler(newState);
    }}
  >
    {state[name].label}
  </Input>
);


const disableStringsOptions = (stringsState, typeState, updateState) => {
  const newStringsState = {...stringsState};
  const isAcoustic = typeState[TypeOptions.ACOUSTIC].value;
  const isElectric = typeState[TypeOptions.ELECTRIC].value;
  const isUkulele = typeState[TypeOptions.UKULELE].value;

  stringsState[StringsOptions.FOUR].isDisabled = isAcoustic && !isElectric && !isUkulele;
  stringsState[StringsOptions.SIX].isDisabled = isUkulele && !isAcoustic && !isElectric;
  stringsState[StringsOptions.SEVEN].isDisabled = isUkulele && !isAcoustic && !isElectric;
  stringsState[StringsOptions.TWELVE].isDisabled = (isElectric || isUkulele) && !isAcoustic;
  updateState(newStringsState);
};


const validatePrice = (priceState, updateState) => {
  const minPrice = priceState[PriceOptions.MIN].value;
  const maxPrice = priceState[PriceOptions.MAX].value;

  if (minPrice && maxPrice && +minPrice > +maxPrice) {
    const newPriceState = {...priceState};
    newPriceState[PriceOptions.MIN].value = maxPrice;
    newPriceState[PriceOptions.MAX].value = minPrice;
    updateState(newPriceState);
  }
};


function Filters() {
  const [priceFilter, setPriceFilter] = useState(initialState[FiltersGroups.PRICE]);
  const [typeFilter, setTypeFilter] = useState(initialState[FiltersGroups.GUITAR_TYPE]);
  const [stringsFilter, setStringsFilter] = useState(initialState[FiltersGroups.STRING_COUNT]);

  const dispatch = useDispatch();
  const validationHandler = () => validatePrice(priceFilter, setPriceFilter);

  useEffect(() => disableStringsOptions(stringsFilter, typeFilter, setStringsFilter), [typeFilter]);

  const applyFiltersHandler = (evt) => {
    evt.preventDefault();
    const activeFilters = {
      [FiltersGroups.PRICE]: [priceFilter[PriceOptions.MIN].value, priceFilter[PriceOptions.MAX].value],
      [FiltersGroups.GUITAR_TYPE]: Object.keys(typeFilter).filter((key) => typeFilter[key].value),
      [FiltersGroups.STRING_COUNT]: Object.keys(stringsFilter).filter((key) => stringsFilter[key].value),
    };
    dispatch(setFilters(activeFilters));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Фильтр</h2>

        <Fieldset legend={'Цена, ₽'} isRow>
          <div className={styles.price}>
            {renderInput(PriceOptions.MIN, priceFilter, setPriceFilter, validationHandler)}
            <span className={styles.divider}></span>
            {renderInput(PriceOptions.MAX, priceFilter, setPriceFilter, validationHandler)}
          </div>
        </Fieldset>

        <Fieldset legend={'Тип гитар'}>
          {Object
            .keys(typeFilter)
            .map((key) => renderCheckbox(key, typeFilter, setTypeFilter))}
        </Fieldset>

        <Fieldset legend={'Количество струн'}>
          {Object
            .keys(stringsFilter)
            .map((key) => renderCheckbox(key, stringsFilter, setStringsFilter))}
        </Fieldset>

        <Button to={'/#'} className={styles.button} onClick={applyFiltersHandler} secondary>показать</Button>
      </div>
    </div>
  );
}

export default Filters;
