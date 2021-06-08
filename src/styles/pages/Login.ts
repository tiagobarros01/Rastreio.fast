import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const FormContainer = styled.div`
  width: 50%;
`;

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 3.5rem;
  }

  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }

  a {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline ${({ theme }) => theme.colors.yellow} 2px;

    :hover {
      filter: brightness(1.2);
    }
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 2rem;

  fieldset {
    border: 0;
  }

  label {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }

  input {
    width: 30rem;
    padding: 1rem;
    border-radius: 10px;

    background: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.inputText};
    font-weight: 500;

    border: 0;
    outline: 0;

    margin-bottom: 1rem;

    :focus {
      border: 3px solid ${({ theme }) => theme.colors.yellow};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-top: 0.5rem;
    margin-bottom: 1.5rem;

    a {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 700;
      text-decoration: underline;

      transition: filter 200ms;

      :hover {
        filter: brightness(1.8);
      }
    }

    button {
      width: 7.5rem;
      height: 3.5rem;
      border-radius: 10px;
      border: 0;

      background: ${({ theme }) => theme.colors.yellow};
      font-weight: bold;

      margin-left: 1rem;

      transition: background 400ms;

      :hover {
        background: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
