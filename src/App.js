import React from 'react';
import Header from './components/molecules/Header';
import GlobalStyle from './components/atoms/GlobalStyle';
import RegistrationPage from './components/pages/RegistrationPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      {/* 🔥 Toggle Between Pages */}
      <RegistrationPage />
    </>
  );
}

export default App;
