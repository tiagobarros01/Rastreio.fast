import React from 'react';
import { Switch } from 'react-router-dom';

import { Collections } from 'src/pages/Collections';
import { Error } from 'src/pages/Error';
import { Home } from 'src/pages/Home';
import { Integrations } from 'src/pages/Integrations';
import { SearchCEP } from 'src/pages/SearchCEP';
import { Tracks } from 'src/pages/Tracks';

import { CustomRoute } from './Route.custom';

export const Routes = (): JSX.Element => (
  <Switch>
    <CustomRoute path="/" component={Home} exact />
    <CustomRoute isPrivate path="/tracks" component={Tracks} exact />
    <CustomRoute path="/collections" component={Collections} exact />
    <CustomRoute path="/searchcep" component={SearchCEP} exact />
    <CustomRoute path="/integrations" component={Integrations} exact />
    <CustomRoute isPrivate path="/error" component={Error} exact />
  </Switch>
  );
