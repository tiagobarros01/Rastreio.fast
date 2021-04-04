import styled from 'styled-components';

const HeaderContent = styled.header`
  width: 100vw;

  background: ${(props) => props.theme.colors.primary};
  filter: brightness(.9);

  & div {
    width: 90%;
    margin: 0 auto;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;

  }

  & div ul{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & div ul a {
    padding: 1rem;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.1rem;
    font-weight: bold;

    transition: filter transform 200ms;

    &:hover {
      filter: brightness(.1);
      transform: translateY(-2px)

    }
  }
`;

export default HeaderContent;
