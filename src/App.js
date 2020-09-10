import React from 'react';
import GlobalStyle from './components/atoms/GlobalStyle';
import RegistrationPage from './components/pages/RegistrationPage';
import Layout from './components/molecules/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 🔥 Toggle Between Pages */}
      <Layout>
        <RegistrationPage />
      </Layout>
    </>
  );
}

export default App;
