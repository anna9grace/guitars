import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';

function Footer({isMain}) {
  return (
    <header>
      <Logo isFooter isLink={!isMain}/>
    </header>
  );
}

Footer.propTypes = {
  isMain: PropTypes.bool,
};

export default Footer;
