import styled from 'styled-components';

import { GenericCenter } from 'src/components/GenericCenter';

export const Container = styled(GenericCenter).attrs(() => ({
  as: 'main',
}))`
  flex: 1;

  flex-direction: column;

  background: ${({ theme }) => theme.colors.scndBackground};
`;

export const FormContainer = styled.form`
  display: flex;

  @media (max-width: 576px) {
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

  padding: .85rem;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  border-radius: 5px 0 0 5px;

  outline: 0;

  transition: border 100ms;

  border: 2px solid ${({ theme }) => theme.colors.background};

  transition: border 200ms ease-in-out;

  :focus {
    border-color: ${({ theme }) => theme.colors.yellow[100]};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
  }
`;
