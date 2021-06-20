import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const FormContainer = styled.div`
  width: 50%;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 3.5rem;
  }

  p {
    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;

    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline ${({ theme }) => theme.colors.yellow} 2px;

    :hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }
`;

export const LoginForm = styled.form`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
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

    border-radius: 10px;

    background: ${({ theme }) => theme.colors.inputBackground};
    color: ${({ theme }) => theme.colors.inputText};

    font-weight: 500;

    border: 0;
    outline: 0;

    margin-bottom: 1rem;
    padding: 1rem;

    transition: border 100ms;

    @media (max-width: 576px) {
      width: 20rem;
    }

    :focus {
      border: 3px solid ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 0.5rem 0 1.5rem 0;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  span {
    color: ${({ theme }) => theme.colors.text};

    font-weight: 700;
    text-decoration: underline;

    transition: filter 200ms;

    :hover {
      cursor: pointer;
      filter: brightness(1.8);
    }
  }

  button {
    width: 7.5rem;
    height: 3.5rem;

    border-radius: 10px;
    border: 0;
    margin-left: 1rem;

    background: ${({ theme }) => theme.colors.thirdBackground};

    font-weight: bold;

    transition: background 200ms, font-size 100ms;

    @media (max-width: 576px) {
      margin: 1rem 0 0 0;
    }

    :hover {
      background: ${({ theme }) => theme.colors.yellow};
      font-size: 1.1rem;
    }
  }
`;
