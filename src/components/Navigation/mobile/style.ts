import { RiStackFill } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components';

const toRight = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const toRightButton = keyframes`
  from {
    transform: translateX(-150%);
  }

  to {
    transform: translateX(0%);
  }
`;

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

  animation: ${toRight} 400ms;
`;

export const List = styled.ul`
  flex: 1;

  li {
    width: 100%;
    filter: brightness(0.9);

    padding: 1rem;
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

  button {
    width: 8rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    animation: ${toRightButton} 800ms;

    border: 0;

    color: ${({ theme }) => theme.colors.text};
    background: none;
  }
`;
