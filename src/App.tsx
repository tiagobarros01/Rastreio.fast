import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

import { CollectionIcon } from './components/CollectionIcon';
import { Header } from './components/Header';
import { ContextProviders } from './contexts';
import { MainRoutes } from './routes';
import { GlobalStyle } from './styles/global';

export const App = (): JSX.Element => (
  <Router>
    <ContextProviders>
      <Header />
      <CollectionIcon />
      <MainRoutes />

      <Toaster />

      <GlobalStyle />
    </ContextProviders>
  </Router>
);
