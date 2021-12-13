import React from 'react';
import { useSelector } from 'react-redux';

import styles from './cart-page.module.scss';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Title from '../../ui/title/title';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';
import CartItem from '../../ui/cart-item/cart-item';
import { AppRoutes } from '../../../const';
import { getGuitarsInCart } from '../../../store/cart-slice/selectors';

function CatalogPage() {
  const guitarsInCart = useSelector(getGuitarsInCart);

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

  const renderCart = (items) => (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <CartItem guitarData={item}/>
        </li>
      ))}
    </ul>
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
