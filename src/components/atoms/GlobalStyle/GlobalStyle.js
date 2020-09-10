import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,900&display=swap');
  ${styledNormalize}
  body{
    background: #eeeeee;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export default GlobalStyle;
