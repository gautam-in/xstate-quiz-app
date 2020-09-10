import React from 'react';
import GlobalStyle from './components/atoms/GlobalStyle';
import Layout from './components/molecules/Layout';
import RegistrationPage from './components/pages/RegistrationPage';
import QuizPage from './components/pages/QuizPage';
import ThankYouPage from './components/pages/ThankYouPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        {/* 🔥 Handle loading registration page */}
        <RegistrationPage />
        {/* 🔥 Handle loading Quiz page */}
        <QuizPage />
        {/* 🔥 Handle loading ThankYou page */}
        <ThankYouPage />
      </Layout>
    </>
  );
}

export default App;
