import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Collections } from 'src/pages/Collections';
import { Error } from 'src/pages/Error';
import { Home } from 'src/pages/Home';
import { Integrations } from 'src/pages/Integrations';
import { SearchCEP } from 'src/pages/SearchCEP';
import { Tracks } from 'src/pages/Tracks';

export const MainRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tracks" element={<Tracks />} />
    <Route path="/collections" element={<Collections />} />
    <Route path="/searchcep" element={<SearchCEP />} />
    <Route path="/integrations" element={<Integrations />} />
    <Route path="/error" element={<Error />} />

    <Route path="*" element={<h1>NOT FOUND</h1>} />
  </Routes>
);
