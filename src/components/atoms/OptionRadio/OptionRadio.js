import React from 'react';
import { Option, OptionField, OptionLabel } from './OptionRadio.style';

const OptionRadio = ({ id, label, onChange }) => (
  <Option>
    <OptionField id={id} name="option" type="radio" onChange={onChange} />
    <OptionLabel htmlFor={id}>{label}</OptionLabel>
  </Option>
);

export default OptionRadio;
