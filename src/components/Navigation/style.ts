import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.li<{ location: boolean }>`
  padding: 1rem;
  color: ${({ location, theme }) => (location ? theme.colors.yellow : theme.colors.text)};
  font-size: 1.1rem;
  font-weight: bold;

  transition: filter transform 200ms;
  cursor: pointer;

  display: flex;
  align-items: center;

  :hover {
    filter: ${({ location }) => (location ? '' : 'brightness(0.8)')};
    transform: translateY(-2px);
  }
`;
