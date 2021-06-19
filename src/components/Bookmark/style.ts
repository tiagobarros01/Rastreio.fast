import { BsFillBookmarksFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 50%;

  position: fixed;

  bottom: 0;
  right: 0;

  z-index: 3;

  margin: 0 1.5rem 1.5rem 0;

  background: ${({ theme }) => theme.colors.thirdBackground};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 200ms;

  :hover {
    cursor: pointer;
    filter: brightness(.9);
  }
`;

export const Icon = styled(BsFillBookmarksFill)`
  color: ${({ theme }) => theme.colors.inputBackground};

  font-size: 1.4rem;
`;
