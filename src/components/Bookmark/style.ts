import { BsFillBookmarksFill } from 'react-icons/bs';
import styled, { keyframes } from 'styled-components';

const goOut = keyframes`
  from {
    transform: scale(100%) rotate(0deg);
  }

  to {
    transform: scale(0%) rotate(360deg);
  }
`;

export const Container = styled.div<{ location: boolean }>`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;

  position: fixed;

  bottom: 0;
  right: 0;

  z-index: 3;

  margin: 0 1.5rem 1.5rem 0;

  background: ${({ theme }) => theme.colors.thirdBackground};

  display: ${({ location }) => (location === true ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  transition: filter 200ms;

  animation: ${({ location }) => location === true && goOut} 1s ease-in-out;

  :hover {
    cursor: pointer;
    filter: brightness(.9);
  }
`;

export const Icon = styled(BsFillBookmarksFill)`
  color: ${({ theme }) => theme.colors.yellow};

  font-size: 1.4rem;
`;
