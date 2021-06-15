/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { useRoutes } from '../../../services/useRoutes';
import {
  Container, StackIcon, ListContainer, List,
} from './style';

export function NavigationMobile(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <Container onClick={() => handleVisibility()}>
      <StackIcon size={32} />
      {isVisible && (
      <ListContainer>
        <List>
          <li>Integrations</li>
          <li onClick={() => useRoutes('/searchcep')}>Search CEP</li>
          <li onClick={() => useRoutes('/login')}>Login</li>
          <li onClick={() => useRoutes('/signin')}>Sign In ⚡</li>
        </List>
      </ListContainer>
      )}
    </Container>
  );
}
