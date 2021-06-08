import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.scndBackground};

  overflow: hidden;
`;

export const FormContainer = styled.div`
  width: 50vw;
  margin-top: 5rem;
`;

export const HeaderForm = styled.div`
  flex: 1;

  padding-top: 2rem;
  padding-bottom: 1rem;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
    font-size: 3.5rem;
  }
`;

export const SignInForm = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 3rem;

  fieldset {
    border: 0;
    margin-bottom: 1rem;
  }

  label {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 3.5rem;

    padding-left: 1rem;
    margin-bottom: 1rem;

    font-weight: 500;

    outline: 0;

    border-radius: 10px;

    background: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.inputText};

    :focus {
      border: 3px solid ${({ theme }) => theme.colors.yellow};
    }
  }

  #btnContainer {
    button {
      width: 7.5rem;
      height: 3.5rem;
      border-radius: 10px;
      border: 0;

      background: ${({ theme }) => theme.colors.yellow};
      font-weight: bold;

      transition: background 400ms;

      :hover {
        background: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

export const DividesFields = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
  }
`;

export const NameContainer = styled.div`
  margin-right: 1rem;
`;
