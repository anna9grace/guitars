import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './cart-item.module.scss';
import Button from '../button/button';
import ProductPopup from '../../blocks/product-popup/product-popup';
import { GuitarType } from '../../../const';
import { addToCart, removeFromCart, decreaseQuantityInCart } from '../../../store/cart-slice/cart-slice';


function CartItem({guitarData}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const increaseHandler = () => dispatch(addToCart(guitarData));
  const removeHandler = () => dispatch(removeFromCart(guitarData));
  const decreaseHandler = () => {
    if (guitarData.quantity === 1) {
      setModalIsOpen(true);
      return;
    }
    dispatch(decreaseQuantityInCart(guitarData));
  };

  const renderModal = () => (
    <ProductPopup
      modalIsOpen={modalIsOpen}
      closeModal={() => setModalIsOpen(false)}
      title={'Удалить этот товар?'}
      guitarData={guitarData}
    >
      <Button className={styles['popup-btn']} onClick={removeHandler} primary>Удалить товар</Button>
      <Button className={styles['popup-btn']} onClick={() => setModalIsOpen(false)} ghost>Продолжить покупки</Button>
    </ProductPopup>
  );

  return (
    <div className={styles.wrapper}>
      <Button className={styles['delete-btn']} onClick={removeHandler}>
        <span className={'visually-hidden'}>удалить</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.77 14.835L9.00004 10.0575L4.23004 14.835L3.16504 13.77L7.94254 9.00004L3.16504 4.23004L4.23004 3.16504L9.00004 7.94254L13.77 3.17254L14.8275 4.23004L10.0575 9.00004L14.8275 13.77L13.77 14.835Z" fill="currentColor"/>
        </svg>
      </Button>

      <div className={styles.picture}>
        <picture>
          <img src={guitarData.picture} alt={guitarData.name} height="128"
            srcSet={guitarData.picture}
          />
        </picture>
      </div>

      <div className={styles.info}>
        <div className={styles.description}>
          <h3 className={styles['guitar-name']}>Гитара {guitarData.name}</h3>
          <p className={styles['guitar-features']}>Артикул: {guitarData.article}</p>
          <p className={styles['guitar-features']}>{GuitarType[guitarData.type]}, {guitarData.strings} струнная</p>
        </div>

        <div className={styles.price}>
          <p className={styles['guitar-price']}>{guitarData.price} ₽</p>
          <div className={styles['guitar-quantity']}>
            <Button className={styles['quantity-btn']} onClick={decreaseHandler}>
              <svg width="8" height="1" viewBox="0 0 8 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="0.5" y2="0.5" stroke="currentColor"/>
              </svg>
            </Button>
            <span className={styles['quantity-value']}>{guitarData.quantity}</span>
            <Button className={styles['quantity-btn']} onClick={increaseHandler}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="4.11816" y2="4.11816" stroke="currentColor"/>
                <line x1="3.8457" y1="8" x2="3.8457" stroke="currentColor"/>
              </svg>
            </Button>
          </div>
          <p className={styles['guitar-total']}>{guitarData.price * guitarData.quantity} ₽</p>
        </div>
      </div>

      {modalIsOpen && renderModal()}
    </div>
  );
}

CartItem.propTypes = {
  guitarData: PropTypes.shape({
    article: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    strings: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};


export default CartItem;
