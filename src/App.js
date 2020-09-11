import React from 'react';
import GlobalStyle from './components/atoms/GlobalStyle';
import Layout from './components/molecules/Layout';
import RegistrationPage from './components/pages/RegistrationPage';
import QuizPage from './components/pages/QuizPage';
import ThankYouPage from './components/pages/ThankYouPage';
import {QuizMachineService} from './machines/QuizMachine';
import { useService } from '@xstate/react';

function App() {
  const [state] = useService(QuizMachineService);
  return (
    <>
      <GlobalStyle />
      <Layout>
        {/* 🔥 Handle loading registration page */}
        {state.matches('register') ? <RegistrationPage /> : null}

        {/* 🔥 Handle loading Quiz page */}
        {state.matches('quiz') ? <QuizPage /> : null}

        {/* 🔥 Handle loading ThankYou page */}
        {state.matches('result') ? <ThankYouPage /> : null}
      </Layout>
    </>
  );
}

export default App;
