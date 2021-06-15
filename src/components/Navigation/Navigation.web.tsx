/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { useRoutes } from '../../services/useRoutes';
import { List } from './style';

export function NavigationWeb() {
  return (
    <List>
      <li>Integrations</li>
      <li onClick={() => useRoutes('/searchcep')}>Search CEP</li>
      <li onClick={() => useRoutes('/login')}>Login</li>
      <li onClick={() => useRoutes('/signin')}>Sign In ⚡</li>
    </List>
  );
}
