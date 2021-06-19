import React from 'react';

import { useRoutes } from '../../services/useRoutes';
import { Container, Icon } from './style';

export function Bookmark(): JSX.Element {
  return (
    <Container onClick={() => useRoutes('/bookmark')}>
      <Icon />
    </Container>
  );
}
