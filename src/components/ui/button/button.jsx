import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

function Button({className, children, primary, secondary, ...attrs}) {
  const Tag = attrs.to ? Link : 'button';

  return (
    <Tag
      className={classNames(
        className,
        styles.button,
        primary && styles.accented,
        secondary && styles.secondary,
      )}
      {...attrs}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
