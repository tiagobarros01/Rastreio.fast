import React from 'react';
import { useLocation } from 'react-router-dom';

import { useRoutes } from 'src/services/useRoutes';

import { Container, Icon } from './style';

export const CollectionIcon = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <Container
      location={pathname === '/collections'}
      onClick={() => useRoutes('/collections')}
    >
      <Icon />
    </Container>
  );
};
