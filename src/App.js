import React from 'react';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,900&display=swap');
  ${styledNormalize}
  body{
    background: #eeeeee;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

function App() {
  return <></>;
}

export default App;
