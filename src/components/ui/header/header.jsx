import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.module.scss';
import Logo from '../logo/logo';
import Button from '../button/button';
import Navbar from '../navbar/navbar';
import { NavLinks } from '../../../const';

function Header({isMain}) {
  return (
    <header className={styles.header}>
      <div className={'container'}>
        <div className={styles.wrapper}>
          <Button className={classNames(styles.button, styles.hidden)}>
            <svg width="14" height="9" viewBox="0 0 14 9" stroke="black" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.6" x2="14" y2="0.6" strokeWidth="0.8"/>
              <line y1="4.6" x2="9.33333" y2="4.6" strokeWidth="0.8"/>
              <line y1="8.6" x2="14" y2="8.6" strokeWidth="0.8"/>
            </svg>
            <span className={'visually-hidden'}>Открыть меню</span>
          </Button>
          <Logo isLink={!isMain}/>
          <Navbar currentPage={NavLinks.CATALOG} className={styles.navbar}/>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isMain: PropTypes.bool,
};


export default Header;
