import React from 'react';

import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Title from '../../ui/title/title';
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs';

function MainPage() {
  const BreadcrumbsLinks = [
    {
      name: 'Главная',
    },
  ];

  return (
    <div className={'wrapper'}>
      <Header isMain/>
      <main className={'container'}>
        <Title>Интернет-магазин гитар</Title>
        <Breadcrumbs links={BreadcrumbsLinks}/>
      </main>
      <Footer isMain />
    </div>

  );
}

export default MainPage;

