import React from 'react';
import styles from './catalog-page.module.scss';
import Header from '../../ui/header/header';
import Footer from '../../ui/footer/footer';

function CatalogPage() {
  return (
    <div className={styles.wrapper}>
      <Header isMain/>
      <main>

      </main>
      <Footer isMain />
    </div>

  );
}

export default CatalogPage;

