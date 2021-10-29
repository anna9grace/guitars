import React from 'react';

import styles from './catalog-page.module.scss';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Title from '../../ui/title/title';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';

function CatalogPage() {
  const BreadcrumbsLinks = [
    {
      path: '/',
      name: 'Главная',
    },
    {
      name: 'Каталог',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header isMain/>
      <main className={'container'}>
        <Title>Каталог гитар</Title>
        <Breadcrumbs links={BreadcrumbsLinks}/>
        <div>content</div>
      </main>
      <Footer isMain />
    </div>

  );
}

export default CatalogPage;

