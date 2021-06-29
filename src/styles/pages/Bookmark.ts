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

  ul {
    display: flex;

    padding: 1rem 4rem;

    width: 90%;

    :not(:last-child) {
      border-bottom: 1.5px solid ${({ theme }) => (theme.title === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.18)')};
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

      color: ${({ theme }) => theme.colors.text};

      transition: color 200ms;

      font-size: 1.1rem;

      :hover {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }

`;
