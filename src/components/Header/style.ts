import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 4.5rem;

  position: fixed;
  z-index: 3;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
  filter: brightness(0.9);
  filter: drop-shadow(0px 0px 15px ${({ theme }) => theme.colors.background});
`;

export const HeaderContent = styled.div`
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

  :hover {
    transform: translateY(-3px);
  }
`;

export const ToggleTheme = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;

  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);

  transition: filter 200ms;

  :hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
`;

export const MoonDark = styled(RiMoonFill)`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const SunLight = styled(RiSunFill)`
  color: ${({ theme }) => theme.colors.yellow};
`;
