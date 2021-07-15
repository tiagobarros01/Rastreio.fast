import React from 'react';
import { Switch } from 'react-router-dom';

import Collections from '../pages/Collections';
import Error from '../pages/Error';
import Homepage from '../pages/Homepage';
import Integrations from '../pages/Integrations';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SearchCEP from '../pages/SearchCEP';
import Tracks from '../pages/Tracks';
import { CustomRoute } from './Route.custom';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <CustomRoute path="/" component={Homepage} exact />
      <CustomRoute isPrivate path="/tracks" component={Tracks} exact />
      <CustomRoute isSigned path="/login" component={Login} exact />
      <CustomRoute isAuthenticated path="/profile" component={Profile} exact />
      <CustomRoute path="/collections" component={Collections} exact />
      <CustomRoute path="/searchcep" component={SearchCEP} exact />
      <CustomRoute path="/integrations" component={Integrations} exact />
      <CustomRoute isPrivate path="/error" component={Error} exact />
    </Switch>
  );
}
