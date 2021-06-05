/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import history from '../../services/history';
import {
  HeaderContainer,
  HeaderContent,
  HomeContainer,
  MoonDark,
  SunLight,
  ToggleTheme,
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
        <HomeContainer>
          <p onClick={() => handleHomepage()}>HOME</p>
          <ToggleTheme onClick={() => toggleTheme()}>
            {theme.title === 'light' ? <MoonDark /> : <SunLight />}
          </ToggleTheme>
        </HomeContainer>
        <nav>
          <ul>
            <li>Integrations</li>
            <li onClick={() => handleCEPPage()}>Search CEP</li>
            <li onClick={() => handleLoginPage()}>Login</li>
            <li onClick={() => handleSignInPage()}>Sign In ⚡</li>
          </ul>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
