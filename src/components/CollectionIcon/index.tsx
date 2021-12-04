import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Container, Icon } from './style';

export const CollectionIcon = (): JSX.Element => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Container
      location={pathname === '/collections'}
      onClick={() => navigate('/collections')}
    >
      <Icon />
    </Container>
  );
};
