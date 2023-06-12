import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function Button({ label, variant = 'inline' }) {
  const button = <button className={styles.button}>{label}</button>;
  if (variant === 'inline') {
    return <div className={styles.container__inline}>{button}</div>;
  } else {
    return button;
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
};
