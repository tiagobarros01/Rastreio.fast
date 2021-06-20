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
            <li>
              <button
                type="button"
                onClick={() => useRoutes('/searchcep')}
                onKeyPress={() => useRoutes('/searchcep')}
              >
                Integrations
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => useRoutes('/searchcep')}
                onKeyPress={() => useRoutes('/searchcep')}
              >
                Search CEP
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => useRoutes('/login')}
                onKeyPress={() => useRoutes('/login')}
              >
                Login
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => useRoutes('/signin')}
                onKeyPress={() => useRoutes('/signin')}
              >
                Sign In ⚡
              </button>
            </li>
          </List>
        </ListContainer>
      )}
    </Container>
  );
}
