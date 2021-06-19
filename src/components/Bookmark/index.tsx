import React from 'react';
import { useLocation } from 'react-router-dom';

import { useRoutes } from '../../services/useRoutes';
import { Container, Icon } from './style';

export function Bookmark(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/bookmark' ? null : (
        <Container onClick={() => useRoutes('/bookmark')}>
          <Icon />
        </Container>
      )}
    </>
  );
}
