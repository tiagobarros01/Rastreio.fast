import { BsFillBookmarksFill } from 'react-icons/bs';

import styled from 'styled-components';

export const Container = styled.div<{ location: boolean }>`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;

  position: fixed;

  bottom: 0;
  right: 0;

  z-index: 3;

  margin: 0 1.5rem 1.5rem;

  background: ${({ theme }) => theme.colors.scndBackground};

  box-shadow: 0 1px 12px #00000050;

  display: ${({ location }) => (location ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  transition: filter 200ms;

  :hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
`;

export const Icon = styled(BsFillBookmarksFill)`
  color: ${({ theme }) => theme.colors.yellow[100]};

  font-size: 1.4rem;
`;
