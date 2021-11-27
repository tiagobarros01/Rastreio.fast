import React from 'react';
import { useLocation } from 'react-router-dom';

import { useRoutes } from 'src/services/useRoutes';

import { Container, List } from './style';

export const NavigationWeb = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <Container>
      <List
        location={pathname === '/integrations'}
        onClick={() => useRoutes('/integrations')}
      >
        Integrações
      </List>

      <List
        location={pathname === '/searchcep'}
        onClick={() => useRoutes('/searchcep')}
      >
        Busca CEP
      </List>
    </Container>
  );
};
