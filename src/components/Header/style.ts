import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import styled from 'styled-components';

import { GenericCenter } from '../GenericCenter';

export const Wrapper = styled.header`
  width: 100%;
  height: 4.5rem;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.base[900]};

  filter: brightness(0.9) drop-shadow(0px 0px 15px ${({ theme }) => theme.colors.base[900]});
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 2rem;
  }
`;

export const HomeContainer = styled.div`
  margin-left: 0.5rem;

  display: flex;
  align-items: center;
`;

export const HomeImage = styled.img`
  width: 4rem;
  height: 4rem;

  cursor: pointer;

  transition: transform 100ms ease-in-out;

  :hover {
    transform: translateY(-3px);
  }
`;

export const ToggleTheme = styled(GenericCenter)`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;

  margin-left: 1rem;

  background: ${({ theme }) => theme.colors.base[900]};

  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);

  transition: filter 200ms ease-in-out;

  cursor: pointer;

  :hover {
    filter: brightness(0.95);
  }
`;

export const MoonDark = styled(RiMoonFill)`
  color: ${({ theme }) => theme.colors.brand[400]};
`;

export const SunLight = styled(RiSunFill)`
  color: ${({ theme }) => theme.colors.brand[400]};
`;
