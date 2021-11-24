import React from 'react';
import PropTypes from 'prop-types';
import styles from './fieldset.module.scss';
import classNames from 'classnames';

function Fieldset({legend, children, isRow, className}) {
  return (
    <fieldset className={classNames(styles.fieldset, className)}>
      <h3 className={styles.legend}>{legend}</h3>
      <div className={isRow ? styles['row-wrapper'] : ''}>
        {children}
      </div>
    </fieldset>
  );
}

Fieldset.propTypes = {
  legend: PropTypes.string,
  children: PropTypes.node.isRequired,
  isRow: PropTypes.bool,
  className: PropTypes.string,
};

export default Fieldset;
