import { RiStackFill } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-left: 1.7rem;
`;

export const StackIcon = styled(RiStackFill)`
  color: ${({ theme }) => theme.colors.inputBackground};

  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

export const ListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 80%;
  height: 100vh;

  z-index: 12;

  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const List = styled.ul`
  flex: 1;

  li {
    width: 100%;
    background: ${({ theme }) => theme.colors.scndBackground};
    filter: brightness(0.9);

    padding: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    font-weight: bold;

    transition: filter transform 200ms;
    cursor: pointer;

    :not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.background};
    }

    :last-child {
      color: ${({ theme }) => theme.colors.yellow};
    }

    :hover {
      filter: brightness(0.8);
      transform: translateY(-2px);
    }
  }
`;
