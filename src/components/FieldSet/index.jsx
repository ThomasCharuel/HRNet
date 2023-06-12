import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function FieldSet({ legend, children }) {
  return (
    <fieldset className={styles.container}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}

FieldSet.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
