import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.scndBackground};

  overflow: hidden;
`;

export const Container = styled.div`
  width: 50vw;
  margin-top: 5rem;

  @media (max-width: 576px) {
    width: 70vw;
  }
`;

export const Header = styled.header`
  flex: 1;

  padding-top: 2rem;
  padding-bottom: 1rem;

  h1 {
    text-align: center;
    font-size: 3.5rem;

    color: ${({ theme }) => theme.colors.yellow};
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

    @media (max-width: 576px) {
      width: 100%;
      max-height: 27rem;

      padding: 1rem;
      overflow-y: scroll;

      ::-webkit-scrollbar {
        width: 0.8rem;
        background: ${({ theme }) => theme.colors.thirdBackground};
      }
      ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.yellow};
        border-radius: 0.5rem;
      }
    }
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

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    transition: border 100ms;

    :focus {
      border: 3px solid ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export const DividesFields = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    display: inherit;

    div {
      margin-right: 0;
    }
  }
`;

export const NameContainer = styled.div`
  margin-right: 1rem;
`;

export const PasswordContainer = styled.div``;

export const BtnContainer = styled.div`
  button {
    width: 7.5rem;
    height: 3.5rem;

    border-radius: 10px;
    border: 0;

    background: ${({ theme }) => theme.colors.thirdBackground};
    color: ${({ theme }) => theme.colors.text};

    font-weight: bold;

    transition: background 200ms, color 200ms, font-size 100ms;

    :hover {
      background: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.textHover};
      font-size: 1.1rem;
    }
  }
`;
