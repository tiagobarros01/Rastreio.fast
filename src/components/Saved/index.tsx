import React from 'react';
import { useLocation } from 'react-router-dom';

import { useRoutes } from '../../services/useRoutes';
import { Container, Icon } from './style';

export function Saved(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Container
      location={pathname === '/bookmark' && true}
      onClick={() => useRoutes('/bookmark')}
    >
      <Icon />
    </Container>
  );
}
