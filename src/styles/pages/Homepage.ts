import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};

  button {
    padding: 1rem;

    border: 0;
    border-radius: 0 5px 5px 0;

    background: ${({ theme }) => theme.colors.thirdBackground};
    color: ${({ theme }) => theme.colors.text};

    transition: background-color 200ms, color 200ms;

    @media (max-width: 576px) {
      margin-top: 1rem;
      width: 45%;
    }

    :hover {
      background: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`;

export const CodeContainer = styled.div`
  @media (max-width: 576px) {
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin: 0 auto;

  text-align: center;

  margin-bottom: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;

    span {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const Input = styled.input`
  width: 20rem;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  border-radius: 5px 0 0 5px;

  outline: 0;

  transition: border 100ms;

  :focus {
    border: 3px solid ${({ theme }) => theme.colors.yellow};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
  }
`;
