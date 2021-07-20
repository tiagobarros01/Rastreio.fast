import React from 'react';
import { Switch } from 'react-router-dom';

import Collections from '../pages/Collections';
import Error from '../pages/Error';
import Homepage from '../pages/Homepage';
import Integrations from '../pages/Integrations';
import SearchCEP from '../pages/SearchCEP';
import Tracks from '../pages/Tracks';
import { CustomRoute } from './Route.custom';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <CustomRoute path="/" component={Homepage} exact />
      <CustomRoute isPrivate path="/tracks" component={Tracks} exact />
      <CustomRoute path="/collections" component={Collections} exact />
      <CustomRoute path="/searchcep" component={SearchCEP} exact />
      <CustomRoute path="/integrations" component={Integrations} exact />
      <CustomRoute isPrivate path="/error" component={Error} exact />
    </Switch>
  );
}
