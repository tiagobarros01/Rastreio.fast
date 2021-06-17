import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
    transform: translateX(-30%);

  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-direction: column;
`;

export const Details = styled.div`
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors.DarkRed};
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const Info = styled.div`
  padding: 2rem 1rem;

  border-radius: 0.3rem;

  background: ${({ theme }) => theme.colors.DarkRed};

  animation: ${fade} 1.8s ease-out;

  :hover {
    cursor: not-allowed;
  }

  p {
    color: ${({ theme }) => (theme.title === 'light' ? '#222' : '#ddd')};

    font-weight: 500;
    font-size: 1.1rem;
  }
`;
