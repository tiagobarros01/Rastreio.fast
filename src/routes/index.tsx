import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Bookmark from '../pages/Bookmark';
import Error from '../pages/Error';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import SearchCEP from '../pages/SearchCEP';
import SignIn from '../pages/SignIn';
import Tracks from '../pages/Tracks';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/tracks" component={Tracks} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/bookmark" component={Bookmark} exact />
      <Route path="/searchcep" component={SearchCEP} exact />
      <Route path="/error" component={Error} exact />
    </Switch>
  );
}
