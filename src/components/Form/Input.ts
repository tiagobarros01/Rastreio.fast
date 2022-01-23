import styled from 'styled-components';

export const Input = styled.input`
  width: 20rem;

  padding: 0.85rem;

  background: ${({ theme }) => theme.colors.base[900]};
  color: ${({ theme }) => theme.colors.base[100]};

  border-radius: 5px 0 0 5px;

  outline: 0;

  transition: border 100ms;

  border: 2px solid ${({ theme }) => theme.colors.base[900]};

  transition: border 200ms ease-in-out;

  :focus {
    border-color: ${({ theme }) => theme.colors.brand[400]};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.base[200]};
  }

  @media (max-width: 576px) {
    border-radius: 5px;
  }
`;
