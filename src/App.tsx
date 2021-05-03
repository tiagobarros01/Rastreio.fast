import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import ContextProvider from './contexts';
import Routes from './routes';
import History from './services/history';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <ContextProvider>
        <Router history={History}>
          <Header />
          <Routes />
        </Router>
        <GlobalStyle />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
