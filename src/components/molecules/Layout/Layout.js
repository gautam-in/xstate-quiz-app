import React from 'react';
import Container from '../../atoms/Container';
import Header from '../Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

export default Layout;
