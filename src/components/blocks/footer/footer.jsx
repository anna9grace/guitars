import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';
import Logo from '../../ui/logo/logo';

function Footer({isMain}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={'container'}>
          <Logo isFooter isLink={!isMain}/>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isMain: PropTypes.bool,
};

export default Footer;
