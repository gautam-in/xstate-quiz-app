import React from 'react';
import Container from '../../atoms/Container';
import Logo from '../../atoms/Logo';
import PSLogo from '../../../assets/ps-logo-white.png';
import { HeaderStyled } from './Header.style';

const Header = () => (
  <HeaderStyled>
    <Container>
      <Logo src={PSLogo} alt="Publicis Sapient" />
    </Container>
  </HeaderStyled>
);

export default Header;
