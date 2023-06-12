import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../../assets/img/close-icon.svg';
import styles from './index.module.scss';

export default function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.darkBackground} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={closeIcon} />
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClose: PropTypes.func.isRequired,
};
