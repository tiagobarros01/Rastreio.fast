/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import history from '../../services/history';
import { HeaderContent } from './style';

export function Header() {
  const handleLogin = () => history.push('/login');
  const handleSignIn = () => history.push('/signin');

  return (
    <HeaderContent>
      <div>
        <ul>
          <a href="">
            <li>Integrations</li>
          </a>
          <a href="">
            <li>Search CEP</li>
          </a>
          <a href="" onClick={handleLogin}>
            <li>Login</li>
          </a>
          <a href="" onClick={handleSignIn}>
            <li>Sign In ⚡</li>
          </a>
        </ul>
      </div>
    </HeaderContent>
  );
}
