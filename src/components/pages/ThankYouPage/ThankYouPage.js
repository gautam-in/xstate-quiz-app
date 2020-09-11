import React from 'react';
import Box from '../../atoms/Box';
import { Score } from './ThankYouPage.style';

const ThankYouPage = () => (
  <Box center>
    <h1>Thank you!</h1>
    <p>We love your true tech spirit. Below is the score out of 100.</p>
    <Score>32</Score>
  </Box>
);

export default ThankYouPage;
