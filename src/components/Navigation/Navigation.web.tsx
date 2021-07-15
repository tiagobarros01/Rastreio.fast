import React from 'react';
import { RiUser3Fill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

import { useStore } from '../../hooks/useStore';
import { useRoutes } from '../../services/useRoutes';
import { Container, List } from './style';

export function NavigationWeb(): JSX.Element {
  const { pathname } = useLocation();
  const { user } = useStore();

  console.log(user !== null ? 'true' : 'false');

  return (
    <Container>
      <List
        location={pathname === '/integrations' && true}
        onClick={() => useRoutes('/integrations')}
      >
        Integrations
      </List>
      <List
        location={pathname === '/searchcep' && true}
        onClick={() => useRoutes('/searchcep')}
      >
        Search CEP
      </List>
      {user !== null ? (
        <List
          location={pathname === '/profile' && true}
          onClick={() => useRoutes('/profile')}
        >
          Profile
          <RiUser3Fill style={{ marginLeft: '.5rem' }} size={18} />
        </List>
      ) : (
        <List
          location={pathname === '/login' && true}
          onClick={() => useRoutes('/login')}
        >
          Login ⚡
        </List>
      )}
    </Container>
  );
}
