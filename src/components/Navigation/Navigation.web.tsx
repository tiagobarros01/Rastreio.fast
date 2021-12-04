import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Container, List } from './style';

export const NavigationWeb = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <List
        location={pathname === '/integrations'}
        onClick={() => navigate('/integrations')}
      >
        Integrações
      </List>

      <List
        location={pathname === '/searchcep'}
        onClick={() => navigate('/searchcep')}
      >
        Busca CEP
      </List>
    </Container>
  );
};
