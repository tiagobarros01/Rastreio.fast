import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};

  img {
    width: 12rem;
    height: 12rem;

    :not(:last-child) {
      margin-right: 2rem;
    }
  }
`;
