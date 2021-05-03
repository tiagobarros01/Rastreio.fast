import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 4.5rem;

  position: fixed;
  z-index: 3;

  display: flex;
  align-items: center;

  background: ${(props) => props.theme.colors.primary};
  filter: brightness(0.9);
  filter: drop-shadow(0px 0px 15px ${(props) => props.theme.colors.primary});
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

  transition: filter 200ms;

  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  :hover {
    cursor: pointer;
    filter: brightness(.8)
  }
`;
