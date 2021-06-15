import { FiCheckCircle } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PackageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PackagesHistory = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 2rem;

  animation: ${fade} 1s;

  h1 {
    margin-top: 3rem;

    width: 100%;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CheckIcon = styled(FiCheckCircle)`
  color: ${({ theme }) => theme.colors.green};
  margin-left: 1rem;
`;

export const TrackContainer = styled.div`
  max-height: 32rem;

  padding: 0.5rem;

  overflow-y: scroll;

  background: ${({ theme }) => theme.colors.scndBackground};

  border-radius: 0.8rem;

  ::-webkit-scrollbar {
    width: 0.8rem;
    background: ${({ theme }) => theme.colors.thirdBackground};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 0.5rem;
  }
`;
