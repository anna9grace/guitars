import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './title.module.scss';

function Title({children, className}) {
  return (
    <h1 className={classNames(className, styles.title)}>
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Title;
