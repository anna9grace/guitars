import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './product-card.module.scss';
import cartIcon from './icon_to-cart.svg';
import Rating from '../rating/rating';
import Button from '../button/button';
import ProductPopup from '../../blocks/product-popup/product-popup';
import Popup from '../popup/popup';
import { addToCart } from '../../../store/cart-slice/cart-slice';
import { AppRoutes } from '../../../const';

function ProductCard({className, guitarData}) {
  const dispatch = useDispatch();
  const [guitarModalIsOpen, setGuitarModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);

  const addToCartHandler = (evt) => {
    evt.preventDefault();
    setGuitarModalIsOpen(false);
    dispatch(addToCart({...guitarData, quantity: 1 }));
    setSuccessModalIsOpen(true);
  };

  const renderGuitarModal = () => (
    <ProductPopup
      modalIsOpen={guitarModalIsOpen}
      closeModal={() => setGuitarModalIsOpen(false)}
      title={'Добавить товар в корзину'}
      guitarData={guitarData}
    >
      <Button className={styles['popup-btn']} onClick={addToCartHandler} primary>Добавить в корзину</Button>
    </ProductPopup>
  );

  const renderSuccessModal = () => (
    <Popup
      modalIsOpen={successModalIsOpen}
      closeModal={() => setSuccessModalIsOpen(false)}
      title={'Товар успешно добавлен в корзину'}
    >
      <Button className={styles['popup-btn']} to={AppRoutes.CART} primary>Перейти в корзину</Button>
      <Button className={styles['popup-btn']} onClick={() => setSuccessModalIsOpen(false)} ghost>Продолжить покупки</Button>
    </Popup>
  );


  return (
    <article className={classNames(styles.wrapper, className)}>
      <div className={styles.photo}>
        <picture>
          <img src={guitarData.picture} alt={guitarData.name} width="80" height="202"
            srcSet={guitarData.picture}
          />
        </picture>
      </div>
      <div className={styles.inner}>
        <div className={styles.rating}>
          <Rating rating={4.5}/>
          <span className={styles.reviews}>{guitarData.reviews}</span>
        </div>
        <div className={styles.info}>
          <p>{guitarData.name}</p>
          <p><span>{guitarData.price}</span> ₽</p>
        </div>

        <div className={styles.buttons}>
          <Button to={'#'} secondary>Подробнее</Button>
          <Button to={'#'} primary icon onClick={() => setGuitarModalIsOpen(true)}>
            <img src={cartIcon} alt='' width='12' height='12'/>
            <span>Купить</span>
          </Button>
        </div>
      </div>

      {guitarModalIsOpen && renderGuitarModal()}
      {successModalIsOpen && renderSuccessModal()}
    </article>
  );
}

ProductCard.propTypes = {
  className: PropTypes.string,
  guitarData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ProductCard;
