import React from 'react';
import styles from './filters.module.scss';
import Fieldset from '../../ui/fieldset/fieldset';
import Button from '../../ui/button/button';

function Filters() {
  return (
    <div className={styles.filters}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Фильтр</h2>

        <Fieldset legend={'Цена, ₽'}>
          <input type="text" />
        </Fieldset>

        <Fieldset legend={'Тип гитар'}>
          <input type="text" />
        </Fieldset>

        <Fieldset legend={'Количество струн'}>
          <input type="text" />
        </Fieldset>

        <Button to={'/#'} className={styles.button} secondary>показать</Button>
      </div>
    </div>
  );
}

export default Filters;
