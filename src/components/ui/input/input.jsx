import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './input.module.scss';
// import { InputTypes } from '../../../const';

function Input({className, type, id, name, children, isLabelVisible = false, ...attrs}) {
  return (
    <div className={classNames(className, styles.field)}>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        {...attrs}
      />

      <label
        className={isLabelVisible ? '' : 'visually-hidden'}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isLabelVisible: PropTypes.bool,
};

export default Input;
