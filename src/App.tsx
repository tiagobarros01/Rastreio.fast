import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

import { ContextProviders } from './contexts';
import { MainRoutes } from './routes';
import { GlobalStyle } from './styles/global';

export const App = (): JSX.Element => (
  <Router>
    <ContextProviders>
      <MainRoutes />

      <Toaster />
      <GlobalStyle />
    </ContextProviders>
  </Router>
);
