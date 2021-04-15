import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import History from './services/history';

function App() {
  return (
    <Router history={History}>
      <Routes />
    </Router>
  );
}

export default App;
