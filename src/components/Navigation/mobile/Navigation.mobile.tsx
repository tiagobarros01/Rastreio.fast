import React, { useState } from 'react';

import { useRoutes } from 'src/services/useRoutes';

import {
 Container, StackIcon, ListContainer, List,
} from './style';

export const NavigationMobile = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container onClick={() => setIsVisible((prevState) => !prevState)}>
      <StackIcon size={32} />

      {isVisible && (
        <ListContainer>
          <List>
            <li>
              <button
                type="button"
                onClick={() => useRoutes('/integrations')}
                onKeyPress={() => useRoutes('/integrations')}
              >
                Integrações
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => useRoutes('/searchcep')}
                onKeyPress={() => useRoutes('/searchcep')}
              >
                Busca CEP
              </button>
            </li>
          </List>
        </ListContainer>
      )}
    </Container>
  );
};
