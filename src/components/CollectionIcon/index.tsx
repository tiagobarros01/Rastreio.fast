import React from 'react';
import { useLocation } from 'react-router-dom';

import { useRoutes } from '../../services/useRoutes';
import { Container, Icon } from './style';

export function CollectionIcon(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Container
      location={pathname === '/collections' && true}
      onClick={() => useRoutes('/collections')}
    >
      <Icon />
    </Container>
  );
}
