import React from 'react';
import PropTypes from 'prop-types';
import styles from './fieldset.module.scss';

function Fieldset({legend, children}) {
  return (
    <fieldset className={styles.fieldset}>
      <h3 className={styles.legend}>{legend}</h3>
      {children}
    </fieldset>
  );
}

Fieldset.propTypes = {
  legend: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Fieldset;
