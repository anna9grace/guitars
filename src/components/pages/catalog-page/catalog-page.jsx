import React from 'react';

import styles from './catalog-page.module.scss';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Title from '../../ui/title/title';

function CatalogPage() {
  return (
    <div className={styles.wrapper}>
      <Header isMain/>
      <main className={'container'}>
        <Title>Каталог гитар</Title>
        <div>content</div>
      </main>
      <Footer isMain />
    </div>

  );
}

export default CatalogPage;

