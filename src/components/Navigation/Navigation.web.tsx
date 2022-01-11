import React, { ComponentPropsWithoutRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Container, ListItem } from './style';

type INavigationWebProps = ComponentPropsWithoutRef<'ul'>;

export const NavigationWeb = (props: INavigationWebProps): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container {...props}>
      <ListItem
        location={pathname === '/integrations'}
        onClick={() => navigate('/integrations')}
      >
        Integrações
      </ListItem>

      <ListItem
        location={pathname === '/searchcep'}
        onClick={() => navigate('/searchcep')}
      >
        Busca CEP
      </ListItem>
    </Container>
  );
};
