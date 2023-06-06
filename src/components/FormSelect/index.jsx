import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FormSelect({ label, choices }) {
  const [value, setValue] = useState(choices[0].value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select labelId={`${label}-label`} label={label} value={value} onChange={handleChange}>
        {choices.map((department, index) => (
          <MenuItem value={department.value} key={index}>
            {department.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.object).isRequired,
};
