import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from 'src/contexts/Theme';
import Logo from 'src/img/Logo.svg';

import { Navigation } from '../Navigation';
import {
  HeaderContainer,
  HeaderContent,
  HomeContainer,
  HomeImage,
  MoonDark,
  SunLight,
  ToggleTheme,
} from './style';

export const Header = (): JSX.Element => {
  const {
    theme: { title },
    toggleTheme,
  } = useTheme(); // ThemeContext
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderContent>
        <HomeContainer>
          <HomeImage src={Logo} alt="Logo" onClick={() => navigate('/')} />
        </HomeContainer>

        <nav>
          <ToggleTheme onClick={() => toggleTheme()}>
            {title === 'light' ? (
              <MoonDark size={22} />
            ) : (
              <SunLight size={22} />
            )}
          </ToggleTheme>

          <Navigation />
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
