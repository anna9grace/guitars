import React from 'react';

import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Title from '../../ui/title/title';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';
import Catalog from '../../blocks/catalog/catalog';

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
    <div className={'wrapper'}>
      <Header isMain/>
      <main className={'container'}>
        <Title>Каталог гитар</Title>
        <Breadcrumbs links={BreadcrumbsLinks}/>
        <Catalog />
      </main>
      <Footer isMain />
    </div>

  );
}

export default CatalogPage;

