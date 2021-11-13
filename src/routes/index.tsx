import React from 'react';
import { Switch } from 'react-router-dom';

import { Collections } from '~/pages/Collections';
import { Error } from '~/pages/Error';
import { Home } from '~/pages/Home';
import { Integrations } from '~/pages/Integrations';
import { SearchCEP } from '~/pages/SearchCEP';
import { Tracks } from '~/pages/Tracks';

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
