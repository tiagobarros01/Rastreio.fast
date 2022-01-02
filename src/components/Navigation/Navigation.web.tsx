import React, { ComponentPropsWithoutRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Container, List } from './style';

type INavigationWebProps = ComponentPropsWithoutRef<'ul'>;

export const NavigationWeb = (props: INavigationWebProps): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container {...props}>
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
