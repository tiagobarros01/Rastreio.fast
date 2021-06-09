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

  animation: ${fade} 1s;

  h1 {
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

  overflow-y: scroll;
`;
