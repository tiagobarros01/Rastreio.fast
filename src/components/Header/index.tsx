/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import history from '../../services/history';
import {
  HeaderContainer, HeaderContent, HomeContainer, MoonDark, SunLight, ToggleTheme,
} from './style';

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleHomepage = () => history.push('/');
  const handleLoginPage = () => history.push('/login');
  const handleSignInPage = () => history.push('/signin');
  const handleCEPPage = () => history.push('/searchcep');

  return (
    <HeaderContainer>
      <HeaderContent>
        <HomeContainer onClick={() => handleHomepage()}>
          <p>HOME</p>
          <ToggleTheme onClick={() => toggleTheme()}>
            {theme.title === 'light' ? <MoonDark /> : <SunLight />}
          </ToggleTheme>
        </HomeContainer>
        <nav>
          <ul>
            <a href="">
              <li>Integrations</li>
            </a>
            <a href="" onClick={() => handleCEPPage()}>
              <li>Search CEP</li>
            </a>
            <a href="" onClick={() => handleLoginPage()}>
              <li>Login</li>
            </a>
            <a href="" onClick={() => handleSignInPage()}>
              <li>Sign In ⚡</li>
            </a>
          </ul>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
