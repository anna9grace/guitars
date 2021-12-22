import React from 'react';
import { useSelector } from 'react-redux';

import styles from './cart-page.module.scss';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Title from '../../ui/title/title';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';
import CartItem from '../../ui/cart-item/cart-item';
import Input from '../../ui/input/input';
import { AppRoutes } from '../../../const';
import { getGuitarsInCart } from '../../../store/cart-slice/selectors';
import Button from '../../ui/button/button';
import { useEffect } from 'react';
import { useState } from 'react';

const BreadcrumbsLinks = [
  {
    path: AppRoutes.ROOT,
    name: 'Главная',
  },
  {
    path: AppRoutes.CATALOG,
    name: 'Каталог',
  },
  {
    name: 'Оформляем',
  },
];

const PromoCodes = {
  GITARAHIT: 'GITARAHIT',
  SUPERGITARA: 'SUPERGITARA',
  GITARA2020: 'GITARA2020',
};

const getFinalPrice = (price, promoCode) => {
  switch (promoCode) {
    case PromoCodes.GITARAHIT:
      return price *= 0.9;
    case PromoCodes.SUPERGITARA:
      return price -= 700;
    case PromoCodes.GITARA2020:
      return Math.max(price -= 3000, price *= 0.7);
    default:
      return price;
  }
};


function CatalogPage() {
  const guitarsInCart = useSelector(getGuitarsInCart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    if (guitarsInCart.length > 0) {
      setTotalPrice(guitarsInCart.reduce((total, item) => total + item.price * item.quantity, 0));
    }
  } , [guitarsInCart]);

  const promoApplyHandler = () => {
    setTotalPrice(getFinalPrice(totalPrice, promoCode));
  };

  const renderCart = (items) => (
    <React.Fragment>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <CartItem guitarData={item}/>
          </li>
        ))}
      </ul>

      <div className={styles.wrapper}>
        <div className={styles.promo}>
          <b>Промокод на скидку</b>
          <p className={styles['promo-text']}>Введите свой промокод, если он у вас есть.</p>
          <div className={styles['promo-wrapper']}>
            <Input
              className={styles['promo-input']}
              type={'text'}
              id={'promo-code'}
              name={'promo-code'}
              value={promoCode}
              onChange={(evt) => setPromoCode(evt.target.value)}
            >
              Введите промокод
            </Input>
            <Button className={styles['promo-btn']} onClick={promoApplyHandler} secondary>Применить купон</Button>
          </div>
        </div>

        <div className={styles.total}>
          <div>Всего: {totalPrice} ₽ </div>
          <Button className={styles['order-btn']} primary>Оформить заказ</Button>
        </div>
      </div>
    </React.Fragment>
  );


  return (
    <div className={'wrapper'}>
      <Header/>
      <main className={'container'}>
        <Title>Корзина</Title>
        <Breadcrumbs links={BreadcrumbsLinks}/>
        {
          guitarsInCart.length < 1
            ? <p className={styles.empty}>Корзина пуста</p>
            : renderCart(guitarsInCart)
        }
      </main>
      <Footer/>
    </div>

  );
}

export default CatalogPage;
