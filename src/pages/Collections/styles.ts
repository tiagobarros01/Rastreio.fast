import { FiTrash } from 'react-icons/fi';

import styled from 'styled-components';

import { GenericCenter } from 'src/components/GenericCenter';

export const Container = styled(GenericCenter).attrs(() => ({
  as: 'main',
}))`
  flex: 1;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.base[800]};
`;

export const Title = styled.div`
  width: 100%;

  margin-bottom: 1rem;

  text-align: center;
`;

export const ListContainer = styled(GenericCenter)`
  background: ${({ theme }) => theme.colors.base[800]};

  box-shadow: 0 2px 12px
    ${({ theme }) => (theme.title === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.18)')};

  flex-direction: column;

  border-radius: 0.8rem;

  min-height: 3rem;

  padding: 1rem;

  @media (max-width: 576px) {
    width: 60%;
  }

  ul {
    :not(:last-child) {
      border-bottom: 1.5px solid
        ${({ theme }) => {
    if (theme.title === 'dark') {
      return 'rgba(0, 0, 0, 0.3)';
    }

    return 'rgba(0, 0, 0, 0.18)';
  }
}}

    p {
      color: ${({ theme }) => theme.colors.base[50]};

      font-size: 1.2rem;
      font-weight: 600;

      margin: 0 1.4rem;
      margin-right: 2rem;

      text-align: center;
    }

    li {
      cursor: pointer;

      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid ${({ theme }) => theme.colors.base[700]};
      padding-bottom: 1rem;
      margin-bottom: 1rem;

      :last-child {
        margin-bottom: 0;
      }

      button {
        font-size: 1.1rem;

        border: 0;

        background: 0;

        color: ${({ theme }) => theme.colors.base[100]};

        transition: color 200ms;

        :hover {
          color: ${({ theme }) => theme.colors.brand[400]};
        }
      }
    }
  }
`;

export const TrashIcon = styled(FiTrash)`
  color: ${({ theme }) => theme.colors.red[100]};

  cursor: pointer;

  font-size: 1.25rem;

  margin-left: 2rem;

  transition: filter 200ms;

  :hover {
    filter: brightness(0.8);
  }
`;

export const WithoutList = styled.div`
  @media (max-width: 576px) {
  }
`;

export const SpinnerContainer = styled.div`
  margin-left: 1.8rem;
  margin-top: 0.3rem;
`;
