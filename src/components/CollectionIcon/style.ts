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

  margin: 0 1.5rem 1.5rem 0;

  background: ${({ theme }) => theme.colors.scndBackground};

  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.3);

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
  color: ${({ theme }) => theme.colors.yellow};

  font-size: 1.4rem;
`;
