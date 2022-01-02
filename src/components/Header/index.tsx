import React, { ComponentPropsWithoutRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from 'src/contexts/Theme';

import { Navigation } from '../Navigation';
import {
  Wrapper,
  Content,
  HomeContainer,
  HomeImage,
  MoonDark,
  SunLight,
  ToggleTheme,
} from './style';

type IHeaderProps = ComponentPropsWithoutRef<'div'>

export const Header = (props: IHeaderProps): JSX.Element => {
  const { theme: { title }, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <Wrapper {...props}>
      <Content>
        <HomeContainer>
          <HomeImage src="/images/Logo.svg" alt="Logo" onClick={() => navigate('/')} />
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
      </Content>
    </Wrapper>
  );
};
