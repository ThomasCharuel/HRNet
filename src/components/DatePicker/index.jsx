import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function DatePicker({ label, onValueChange }) {
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={`${label}-input`}>{label}</label>
      <input onChange={handleChange} type="date" id={`${label}-input`} className={styles.input} />
    </div>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
