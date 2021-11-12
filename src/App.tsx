import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Router } from 'react-router-dom';

import { CollectionIcon } from './components/CollectionIcon';
import { Header } from './components/Header';
import { ContextProvider } from './contexts';
import { Routes } from './routes';
import { History } from './services/history';
import { GlobalStyle } from './styles/global';

export const App = (): JSX.Element => (
  <ContextProvider>
    <Router history={History}>
      <Header />
      <CollectionIcon />
      <Routes />
      <Toaster />
    </Router>
    <GlobalStyle />
  </ContextProvider>
  );
