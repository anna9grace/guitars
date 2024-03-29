import React from 'react';

import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Title from '../../ui/title/title';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';
import Catalog from '../../blocks/catalog/catalog';
import { AppRoutes, NavLinks } from '../../../const';

function CatalogPage() {
  const BreadcrumbsLinks = [
    {
      path: AppRoutes.ROOT,
      name: 'Главная',
    },
    {
      name: 'Каталог',
    },
  ];

  return (
    <div className={'wrapper'}>
      <Header currentPage={NavLinks.CATALOG}/>
      <main className={'container'}>
        <Title>Каталог гитар</Title>
        <Breadcrumbs links={BreadcrumbsLinks}/>
        <Catalog />
      </main>
      <Footer />
    </div>

  );
}

export default CatalogPage;

