import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './filters.module.scss';
import Fieldset from '../../ui/fieldset/fieldset';
import Button from '../../ui/button/button';
import Input from '../../ui/input/input';
import { setInputValue, setCheckboxValue } from '../../../store/filters-slice/filters-slice';
import { getGuitarFilters, getStringFilters, getPriceFilters } from '../../../store/filters-slice/selectors';
import { InputTypes, FilterGroups } from '../../../const';

const PricePlaceholder = {
  MIN: '1 000',
  MAX: '30 000',
};

function Filters() {
  const dispatch = useDispatch();
  const filtersGuitarData = useSelector(getGuitarFilters);
  const filtersStringData = useSelector(getStringFilters);
  const filtersPriceData = useSelector(getPriceFilters);

  const inputChangeHandler = (evt, group, name) => dispatch(setInputValue({group, name, value: evt.target.value}));
  const checkboxChangeHandler = (evt, group, name) => dispatch(setCheckboxValue({group, name}));

  const renderInput = (inputData, group, type, changeHandler, isLabel = true, placeholder) => (
    <Input
      key={inputData.name}
      type={type}
      id={inputData.name}
      name={inputData.name}
      value={inputData.value}
      group={group}
      isLabelVisible={isLabel}
      placeholder={placeholder ?? undefined}
      onChange={(evt) => changeHandler(evt, group, inputData.name)}
    >
      {inputData.label}
    </Input>
  );


  return (
    <div className={styles.filters}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Фильтр</h2>

        <Fieldset legend={'Цена, ₽'} isRow>
          <div className={styles.price}>
            {renderInput(filtersPriceData[0], FilterGroups.PRICE, InputTypes.TEXT, inputChangeHandler, false, PricePlaceholder.MIN)}
            <span className={styles.divider}></span>
            {renderInput(filtersPriceData[1], FilterGroups.PRICE, InputTypes.TEXT, inputChangeHandler, false, PricePlaceholder.MAX)}
          </div>
        </Fieldset>

        <Fieldset legend={'Тип гитар'}>
          {filtersGuitarData.map((input) => renderInput(input, FilterGroups.GUITAR_TYPE, InputTypes.CHECKBOX, checkboxChangeHandler))}
        </Fieldset>

        <Fieldset legend={'Количество струн'}>
          {filtersStringData.map((input) => renderInput(input, FilterGroups.STRING_COUNT, InputTypes.CHECKBOX, checkboxChangeHandler))}
        </Fieldset>

        <Button to={'/#'} className={styles.button} secondary>показать</Button>
      </div>
    </div>
  );
}

export default Filters;
