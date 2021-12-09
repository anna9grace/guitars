import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

function Button({className, children, primary, secondary, ghost, icon, ...attrs}) {
  const Tag = attrs.to ? Link : 'button';

  return (
    <Tag
      className={classNames(
        className,
        styles.button,
        primary && styles.primary,
        secondary && styles.secondary,
        ghost && styles.ghost,
        icon && styles['with-icon'],
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
  ghost: PropTypes.bool,
  icon: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
