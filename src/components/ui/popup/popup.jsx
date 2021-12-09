import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './popup.module.scss';

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
        <button className={styles['close-btn']} onClick={closeModal}><span className={'visually-hidden'}>close</span></button>
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
