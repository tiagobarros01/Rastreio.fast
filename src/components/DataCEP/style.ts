import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};

  box-shadow: 0 2px 12px
    ${({ theme }) => (theme.title === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.18)')};

  padding: 2rem 3rem;

  border-radius: 0.8rem;

  animation: ${fade} 800ms ease-in-out;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    strong {
      color: ${({ theme }) => theme.colors.title};
      font-weight: 600;

      font-size: 1.2rem;
    }

    p {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.1rem;
    }
  }
`;
