import React from 'react';
import styles from './sorting.module.scss';
import Button from '../../ui/button/button';
import classNames from 'classnames';
import { SortSettings } from '../../../const';
import { useSelector, useDispatch } from 'react-redux';
import { getSortSettings } from '../../../store/data-slice/selectors';
import { setSortSettings } from '../../../store/data-slice/data-slice';

function Sorting() {
  const dispatch = useDispatch();
  const sorting = useSelector(getSortSettings);

  const changeSortHandler = (evt, sortType) => {
    evt.preventDefault();
    const target = evt.target.closest('button');
    dispatch(setSortSettings({sortType, value: target.dataset.sortType}));
  };

  return (
    <div className={styles.wrapper}>
      Сортировать:

      <div className={styles.type}>
        <Button
          className={classNames(styles['type-btn'], sorting.type === SortSettings.type.PRICE && styles.active)}
          data-sort-type={SortSettings.type.PRICE}
          onClick={(evt) => changeSortHandler(evt, 'type')}
        >
          по цене
        </Button>

        <Button
          className={classNames(styles['type-btn'], sorting.type === SortSettings.type.POPULARITY && styles.active)}
          data-sort-type={SortSettings.type.POPULARITY}
          onClick={(evt) => changeSortHandler(evt, 'type')}
        >
          по популярности
        </Button>
      </div>

      <div className={styles.direction}>
        <Button
          className={classNames(styles['direction-btn'], sorting.direction === SortSettings.direction.UP && styles.active)}
          data-sort-type={SortSettings.direction.UP}
          onClick={(evt) => changeSortHandler(evt, 'direction')}
        >
          <span className={'visually-hidden'}>По возрастанию</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58301 15.667H17.4163L10.9997 5.58366L4.58301 15.667Z"/>
          </svg>
        </Button>

        <Button
          className={classNames(styles['direction-btn'], sorting.direction === SortSettings.direction.DOWN && styles.active)}
          data-sort-type={SortSettings.direction.DOWN}
          onClick={(evt) => changeSortHandler(evt, 'direction')}
        >
          <span className={'visually-hidden'}>По убыванию</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.417 5.33301L4.58366 5.33301L11.0003 15.4163L17.417 5.33301Z"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Sorting;
