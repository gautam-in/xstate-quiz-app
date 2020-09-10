import React from 'react';
import { StyledAlert } from './Alert.style';

const Alert = ({ children }) => (
  <StyledAlert role="alert">{children}</StyledAlert>
);

export default Alert;
