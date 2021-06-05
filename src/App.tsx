import React from 'react';
import { Router } from 'react-router-dom';

import { Header } from './components/Header';
import ContextProvider from './contexts';
import Routes from './routes';
import History from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ContextProvider>
      <Router history={History}>
        <Header />
        <Routes />
      </Router>
      <GlobalStyle />
    </ContextProvider>
  );
}

export default App;
