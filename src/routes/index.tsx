import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Collections } from 'src/pages/Collections';
import { Home } from 'src/pages/Home';
import { Integrations } from 'src/pages/Integrations';
import { SearchCEP } from 'src/pages/SearchCEP';
import { Tracks } from 'src/pages/Tracks';

import { PrivateRoute } from './Route.private';

export const MainRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/tracks"
      element={(
        <PrivateRoute redirectTo="/">
          <Tracks />
        </PrivateRoute>
    )}
    />
    <Route path="/collections" element={<Collections />} />
    <Route path="/searchcep" element={<SearchCEP />} />
    <Route path="/integrations" element={<Integrations />} />

    <Route path="*" element={<h1>NOT FOUND</h1>} />
  </Routes>
);
