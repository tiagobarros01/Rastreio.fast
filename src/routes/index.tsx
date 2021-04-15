import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from '../pages/Error';
import Homepage from '../pages/Homepage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/error" component={Error} exact />
    </Switch>
  );
}
