/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import Logo from '../../img/Logo.svg';
import { useRoutes } from '../../services/useRoutes';
import {
  HeaderContainer,
  HeaderContent,
  HomeContainer,
  HomeImage,
  MoonDark,
  SunLight,
  ToggleTheme,
} from './style';

export function Header() {
  const { theme, toggleTheme } = useTheme(); // ThemeContext

  return (
    <HeaderContainer>
      <HeaderContent>
        <HomeContainer>
          <HomeImage src={Logo} alt="Logo" onClick={() => useRoutes('/')} />
        </HomeContainer>
        <nav>
          <ul>
            <ToggleTheme onClick={() => toggleTheme()}>
              {theme.title === 'light' ? <MoonDark size={22} /> : <SunLight size={22} />}
            </ToggleTheme>
            <li>Integrations</li>
            <li onClick={() => useRoutes('/searchcep')}>Search CEP</li>
            <li onClick={() => useRoutes('/login')}>Login</li>
            <li onClick={() => useRoutes('/signin')}>Sign In ⚡</li>
          </ul>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
