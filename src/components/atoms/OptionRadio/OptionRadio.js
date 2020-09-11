import React from 'react';
import { Option, OptionField, OptionLabel } from './OptionRadio.style';

const OptionRadio = ({ id, label, onChange, isChecked }) => {
  return (
    <Option>
      <OptionField
        id={id}
        name="option"
        type="radio"
        onChange={(e) => {
          onChange(e);
        }}
        checked={isChecked}
      />
      <OptionLabel htmlFor={id}>{label}</OptionLabel>
    </Option>
  );
};

export default OptionRadio;
