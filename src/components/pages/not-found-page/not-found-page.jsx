import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './not-found-page.module.scss';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Title from '../../ui/title/title';
import icon from './error.svg';
import { AppRoutes } from '../../../const';

function NotFoundPage() {
  return (
    <div className={'wrapper'}>
      <Header/>
      <main className={classNames('container', styles.wrapper)}>
        <Title className={'visually-hidden'}>Ошибка 404</Title>
        <div className={styles.icon}>
          <img src={icon} alt=""/>
        </div>
        <p className={styles.text}>К сожалению, такой страницы не существует</p>
        <Link to={AppRoutes.ROOT} className={classNames(styles.link)}>На главную</Link>
      </main>
      <Footer/>
    </div>

  );
}

export default NotFoundPage;
