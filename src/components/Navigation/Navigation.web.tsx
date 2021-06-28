import React from 'react';
import { useLocation } from 'react-router-dom';

import { useRoutes } from '../../services/useRoutes';
import { Container, List } from './style';

export function NavigationWeb(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Container>
      <List
        location={pathname === '' && true}
        onClick={() => useRoutes('/integrations')}
      >
        Integrations
      </List>
      <List
        location={pathname === '/searchcep' && true}
        onClick={() => useRoutes('/searchcep')}
      >
        Search CEP
      </List>
      <List
        location={pathname === '/login' && true}
        onClick={() => useRoutes('/login')}
      >
        Login
      </List>
      <List
        location={pathname === '/signin' && true}
        onClick={() => useRoutes('/signin')}
      >
        Sign In ⚡
      </List>
    </Container>
  );
}
