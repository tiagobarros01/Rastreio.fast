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
  color: #fff;

  transition: color 200ms;

  :hover {
    cursor: pointer;
    color: #ccc;
  }
`;

export const ListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  
  width: 84%;
  height: 100vh;

  z-index: 12;

  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const List = styled.ul`
  flex: 1;

  li {
    width: 100%;
    background: ${({ theme }) => theme.colors.thirdBackground};;

    padding: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    font-weight: bold;

    transition: filter transform 200ms;
    cursor: pointer;

    :last-child {
      color: ${({ theme }) => theme.colors.yellow};
    }

    :hover {
      filter: brightness(0.8);
      transform: translateY(-2px);
    }
  }
`;
