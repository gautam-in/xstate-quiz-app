import React from 'react';
import GlobalStyle from './components/atoms/GlobalStyle';
import RegistrationPage from './components/pages/RegistrationPage';
import Layout from './components/molecules/Layout';
import ThankYouPage from './components/pages/ThankYouPage/ThankYouPage';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 🔥 Toggle Between Pages */}
      <Layout>
        {/* <RegistrationPage /> */}
        <ThankYouPage />
      </Layout>
    </>
  );
}

export default App;
