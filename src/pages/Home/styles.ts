import styled from 'styled-components';

import { GenericCenter } from 'src/components/GenericCenter';

export const Container = styled(GenericCenter)`
  flex: 1;

  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};

  button {
    padding: 1rem;

    border: 0;
    border-radius: 0 5px 5px 0;

    background: ${({ theme }) => theme.colors.thirdBackground};
    color: ${({ theme }) => theme.colors.text};

    transition: background-color 200ms, color 200ms;

    :hover {
      background: ${({ theme }) => theme.colors.yellow[100]};
      color: ${({ theme }) => theme.colors.textHover};
    }

    @media (max-width: 576px) {
      margin-top: 1rem;
      width: 45%;
    }
  }
`;

export const FormContainer = styled.form`
  @media (max-width: 576px) {
    display: flex;

    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  text-align: center;

  margin-bottom: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 3rem;

    span {
      color: ${({ theme }) => theme.colors.yellow[100]};
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
    border: 3px solid ${({ theme }) => theme.colors.yellow[100]};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
  }
`;
