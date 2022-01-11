import styled from 'styled-components';

export const Input = styled.input`
  width: 20rem;

  padding: 0.85rem;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  border-radius: 5px 0 0 5px;

  outline: 0;

  transition: border 100ms;

  border: 2px solid ${({ theme }) => theme.colors.background};

  transition: border 200ms ease-in-out;

  :focus {
    border-color: ${({ theme }) => theme.colors.yellow[400]};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
  }

  @media (max-width: 576px) {
    border-radius: 5px;
  }
`;
