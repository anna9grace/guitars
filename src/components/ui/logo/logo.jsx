import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './logo.module.scss';
import logo from './logo.svg';
import logoFooter from './logo_footer.svg';


function Logo({isLink, isFooter, className, ...attrs}) {
  const Tag = isLink ? Link : 'p';

  return (
    <Tag
      className={classNames(
        className,
        styles.logo,
        // isFooter && styles.logo_footer,
      )}
      to={isLink ? '/' : undefined}
    >
      <img
        src={isFooter ? logoFooter : logo}
        alt={'Logo of Guitar shop'}
        width={67}
        height={70}
        {...attrs}
      />
    </Tag>
  );
}

Logo.propTypes = {
  isLink: PropTypes.bool,
  isFooter: PropTypes.bool,
  className: PropTypes.string,
};

export default Logo;
