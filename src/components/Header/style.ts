import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 4.5rem;

  position: fixed;
  z-index: 3;

  display: flex;
  align-items: center;

  background: ${(props) => props.theme.colors.background};
  filter: brightness(0.9);
  filter: drop-shadow(0px 0px 15px ${(props) => props.theme.colors.background});
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    margin-right: 2rem;
  }

  nav ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav ul a {
    padding: 1rem;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.1rem;
    font-weight: bold;

    transition: filter transform 200ms;

    :last-child {
      color: ${(props) => props.theme.colors.yellow};
    }

    :hover {
      filter: brightness(0.8);
      transform: translateY(-2px);
    }
  }
`;

export const HomeContainer = styled.div`
  margin-left: 1rem;

  display: flex;
  align-items: center;


  p {
    font-weight: bold;
    font-size: 1.5rem;

    transition: filter 200ms;

    :hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;

export const ToggleTheme = styled.div`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.scndBackground};

  transition: filter 200ms;

  :hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
`;

export const MoonDark = styled(RiMoonFill)`
  color: ${(props) => props.theme.colors.yellow};
`;

export const SunLight = styled(RiSunFill)`
  color: ${(props) => props.theme.colors.yellow};
`;
