import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../ui/popup/popup';
import styles from './product-popup.module.scss';

const GuitarType = {
  'acoustic': 'Акустическая гитара',
  'electric': 'Электрогитара',
  'ukulele': 'Укулеле',
};

function ProductPopup({guitarData, closeModal, children, ...attrs}) {


  return (
    <Popup
      closeModal={closeModal}
      {...attrs}
    >
      <div className={styles.guitar}>
        <div className={styles.picture}>
          <picture>
            <img src={guitarData.img} alt={guitarData.name} height="128"
              srcSet={guitarData.img}
            />
          </picture>
        </div>
        <div className={styles.info}>
          <h3 className={styles['guitar-name']}>Гитара {guitarData.name}</h3>
          <p className={styles['guitar-features']}>Артикул: {guitarData.article}</p>
          <p className={styles['guitar-features']}>{GuitarType[guitarData.type]}, {guitarData.strings} струнная</p>
          <p className={styles['guitar-price']}>Цена: {guitarData.price} ₽</p>
        </div>
      </div>

      <div className={styles.buttons}>
        {children}
      </div>

    </Popup>
  );
}

ProductPopup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
  guitarData: PropTypes.shape({
    article: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    strings: PropTypes.number.isRequired,
  }),
};

export default ProductPopup;
