import { FiTrash } from 'react-icons/fi';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const Title = styled.div`
  width: 100%;

  margin-bottom: 1rem;

  text-align: center;
`;

export const ListContainer = styled.div`
  background: ${({ theme }) => theme.colors.scndBackground};
  box-shadow: 0 2px 12px
    ${({ theme }) => (theme.title === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.18)')};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 0.8rem;

  width: 20%;
  min-height: 3rem;

  @media (max-width: 576px) {
    width: 60%;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    width: 90%;

    :not(:last-child) {
      border-bottom: 1.5px solid
        ${({ theme }) => (theme.title === 'dark'
    ? 'rgba(0, 0, 0, 0.3)'
    : 'rgba(0, 0, 0, 0.18)')};
    }

    p {
      color: ${({ theme }) => theme.colors.title};

      font-size: 1.2rem;
      font-weight: 600;

      margin-right: 1rem;

      width: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      cursor: pointer;

      button {
        font-size: 1.1rem;

        border: 0;

        background: 0;

        color: ${({ theme }) => theme.colors.text};

        transition: color 200ms;

        :hover {
          color: ${({ theme }) => theme.colors.yellow[100]};
        }
      }
    }
  }
`;

export const TrashIcon = styled(FiTrash)`
  color: ${({ theme }) => theme.colors.red[100]};

  cursor: pointer;

  font-size: 1.25rem;

  transition: filter 200ms;

  :hover {
    filter: brightness(0.8);
  }
`;

export const WithoutList = styled.div`
  @media (max-width: 576px) {
  }
`;
