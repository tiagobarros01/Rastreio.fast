import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Homepage from '../pages/Homepage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/homepage" component={Homepage} exact />
      <Route path="/" component={Header} exact />
    </Switch>
  );
}
