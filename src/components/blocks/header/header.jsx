import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './header.module.scss';
import Logo from '../../ui/logo/logo';
import Button from '../../ui/button/button';
import LinksList from '../../ui/links-list/links-list';
import UserPanel from '../../ui/user-panel/user-panel';
import { AppRoutes, NavLinks } from '../../../const';

function Header({isMain, currentPage}) {
  const navLinks = [
    {
      name: NavLinks.CATALOG,
      href: AppRoutes.CATALOG,
    },
    {
      name: NavLinks.WHERE_BUY,
      href: '/where-to-buy',
    },
    {
      name: NavLinks.ABOUT,
      href: '/about',
    },
    {
      name: NavLinks.SERVICE,
      href: '/service-centres',
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={classNames('container', styles.inner)}>

          <Button className={classNames(styles.button, styles.hidden)}>
            <svg width="14" height="9" viewBox="0 0 14 9" stroke="black" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.6" x2="14" y2="0.6" strokeWidth="0.8"/>
              <line y1="4.6" x2="9.33333" y2="4.6" strokeWidth="0.8"/>
              <line y1="8.6" x2="14" y2="8.6" strokeWidth="0.8"/>
            </svg>
            <span className={'visually-hidden'}>Открыть меню</span>
          </Button>

          <Logo isLink={!isMain}/>

          <nav className={styles.navbar}>
            <LinksList links={navLinks} currentPage={currentPage} />
          </nav>

          <UserPanel />

        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isMain: PropTypes.bool,
  currentPage: PropTypes.string,
};


export default Header;
