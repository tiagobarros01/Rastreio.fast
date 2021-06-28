import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const Title = styled.div`
  width: 100%;

  margin-bottom: 1rem;

  text-align: center;
`;

export const ListContainer = styled.div``;
