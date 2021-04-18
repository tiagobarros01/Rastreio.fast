import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from '../pages/Error';
import Homepage from '../pages/Homepage';
import Tracks from '../pages/Tracks';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/tracks" component={Tracks} exact />
      <Route path="/error" component={Error} exact />
    </Switch>
  );
}