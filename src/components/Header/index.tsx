/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import history from '../../services/history';
import { HeaderContainer, HeaderContent, HomeContainer } from './style';

export function Header() {
  const handleHomepage = () => history.push('/');
  const handleLoginPage = () => history.push('/login');
  const handleSignInPage = () => history.push('/signin');
  const handleCEPPage = () => history.push('/searchcep');

  return (
    <HeaderContainer>
      <HeaderContent>
        <HomeContainer onClick={handleHomepage}>
          <p>HOME</p>
        </HomeContainer>
        <nav>
          <ul>
            <a href="">
              <li>Integrations</li>
            </a>
            <a href="" onClick={handleCEPPage}>
              <li>Search CEP</li>
            </a>
            <a href="" onClick={handleLoginPage}>
              <li>Login</li>
            </a>
            <a href="" onClick={handleSignInPage}>
              <li>Sign In ⚡</li>
            </a>
          </ul>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
