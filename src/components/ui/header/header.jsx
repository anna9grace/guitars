import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';
import Logo from '../logo/logo';

function Header({isMain}) {
  return (
    <header>
      <div className={styles.inner}>

        <Logo isLink={!isMain}/>
      </div>
    </header>
  );
}

Header.propTypes = {
  isMain: PropTypes.bool,
};


export default Header;
