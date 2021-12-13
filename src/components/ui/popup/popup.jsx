import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './popup.module.scss';
import Button from '../button/button';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(88, 87, 87, 0.6)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '740px',
    minHeight: '185px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px 50px',
    boxShadow: '0px 5px 6px rgba(63, 63, 63, 0.2)',
    borderRadius: '4px',
  },
};

Modal.setAppElement('#root');

function Popup({children, className, modalIsOpen, closeModal, title=''}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={title}
    >
      <div className={classNames(styles.wrapper, className)}>
        <h2 className={styles.title}>{title}</h2>
        <Button className={styles['close-btn']} onClick={closeModal}>
          <span className={'visually-hidden'}>close</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.77 14.835L9.00004 10.0575L4.23004 14.835L3.16504 13.77L7.94254 9.00004L3.16504 4.23004L4.23004 3.16504L9.00004 7.94254L13.77 3.17254L14.8275 4.23004L10.0575 9.00004L14.8275 13.77L13.77 14.835Z" fill="currentColor"/>
          </svg>
        </Button>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Modal>
  );
}

Popup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Popup;
