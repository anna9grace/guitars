import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getInCartCount } from '../../../store/cart-slice/selectors';
import Button from '../button/button';
import styles from './cart-button.module.scss';

function CartButton({children, ...attrs}) {
  const inCartCount = useSelector(getInCartCount);


  return (
    <Button className={styles.button} {...attrs}>
      {children}
      <span className={styles.chip}>{inCartCount === 0 ? '' : inCartCount}</span>
    </Button>
  );
}

CartButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartButton;
