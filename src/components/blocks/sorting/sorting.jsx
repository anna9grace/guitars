import React from 'react';
import styles from './sorting.module.scss';
import Button from '../../ui/button/button';
import classNames from 'classnames';

function Sorting() {
  return (
    <div className={styles.wrapper}>
      Сортировать:

      <div className={styles.type}>
        <Button className={styles['type-btn']}>по цене</Button>
        <Button className={classNames(styles['type-btn'], styles.active)}>по популярности</Button>
      </div>

      <div className={styles.direction}>
        <Button className={styles['direction-btn']}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58301 15.667H17.4163L10.9997 5.58366L4.58301 15.667Z"/>
          </svg>
        </Button>
        <Button className={classNames(styles['direction-btn'], styles.active)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.417 5.33301L4.58366 5.33301L11.0003 15.4163L17.417 5.33301Z"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Sorting;
