import React, { useState } from 'react';
import { RiUser3Fill } from 'react-icons/ri';

import { useStore } from '../../../hooks/useStore';
import { useRoutes } from '../../../services/useRoutes';
import {
 Container, StackIcon, ListContainer, List,
} from './style';

export function NavigationMobile(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { user } = useStore();

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
                onClick={() => useRoutes('/integrations')}
                onKeyPress={() => useRoutes('/integrations')}
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
            {user !== null ? (
              <li>
                <button
                  type="button"
                  onClick={() => useRoutes('/profile')}
                  onKeyPress={() => useRoutes('/profile')}
                >
                  Profile
                  <RiUser3Fill style={{ marginLeft: '.5rem' }} />
                </button>
              </li>
            ) : (
              <>
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
                    onClick={() => useRoutes('/login')}
                    onKeyPress={() => useRoutes('/login')}
                  >
                    Sign In ⚡
                  </button>
                </li>
              </>
            )}
          </List>
        </ListContainer>
      )}
    </Container>
  );
}
