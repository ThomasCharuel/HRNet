import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function TextField({ label, onValueChange, type = 'text' }) {
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={`${label}-input`}>
        {label}
      </label>
      <input onChange={handleChange} type={type} id={`${label}-input`} className={styles.input} />
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};
