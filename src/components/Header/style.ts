import styled from 'styled-components';

const HeaderContent = styled.header`
  width: 100vw;

  background: ${(props) => props.theme.colors.primary};
  filter: brightness(0.9);
  filter: drop-shadow(0px 0px 40px ${(props) => props.theme.colors.primary});

  div {
    width: 90%;
    margin: 0 auto;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  div ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div ul a {
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

export default HeaderContent;
