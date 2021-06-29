import React from 'react';
import { Switch } from 'react-router-dom';

import Collections from '../pages/Collections';
import Error from '../pages/Error';
import Homepage from '../pages/Homepage';
import Integrations from '../pages/Integrations';
import Login from '../pages/Login';
import SearchCEP from '../pages/SearchCEP';
import SignIn from '../pages/SignIn';
import Tracks from '../pages/Tracks';
import { CustomRoute } from './Route.custom';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <CustomRoute isPrivate={false} path="/" component={Homepage} exact />
      <CustomRoute isPrivate path="/tracks" component={Tracks} exact />
      <CustomRoute isPrivate={false} path="/login" component={Login} exact />
      <CustomRoute isPrivate={false} path="/signin" component={SignIn} exact />
      <CustomRoute
        isPrivate={false}
        path="/collections"
        component={Collections}
        exact
      />
      <CustomRoute
        isPrivate={false}
        path="/searchcep"
        component={SearchCEP}
        exact
      />
      <CustomRoute
        isPrivate={false}
        path="/integrations"
        component={Integrations}
        exact
      />
      <CustomRoute isPrivate path="/error" component={Error} exact />
    </Switch>
  );
}
