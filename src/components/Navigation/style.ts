import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    padding: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    font-weight: bold;

    transition: filter transform 200ms;
    cursor: pointer;

    :last-child {
      color: ${({ theme }) => theme.colors.yellow};
    }

    :hover {
      filter: brightness(0.8);
      transform: translateY(-2px);
    }
  }
`;
