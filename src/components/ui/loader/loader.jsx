import React from 'react';
import styles from './loader.module.scss';

function Loader() {
  return (
    <div className={styles.container} >
      <div className={styles.spinner}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
