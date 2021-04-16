import React from 'react';
import { Router } from 'react-router-dom';

import ContextProvider from './contexts';
import Routes from './routes';
import History from './services/history';

function App() {
  return (
    <ContextProvider>
      <Router history={History}>
        <Routes />
      </Router>
    </ContextProvider>
  );
}

export default App;
