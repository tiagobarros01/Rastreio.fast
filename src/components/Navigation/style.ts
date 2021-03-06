import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li<{ location: boolean }>`
  padding: 1rem;

  color: ${({ location, theme }) => (location ? theme.colors.brand[400] : theme.colors.base[50])};

  font-size: 1.1rem;
  font-weight: bold;

  transition: filter 200ms, transform 100ms ease-in-out;

  cursor: pointer;

  display: flex;
  align-items: center;

  :hover {
    filter: ${({ location }) => !location && 'brightness(0.8)'};

    transform: translateY(-2px);
  }
`;
