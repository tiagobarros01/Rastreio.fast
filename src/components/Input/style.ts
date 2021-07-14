import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const Input = styled(InputMask)`
  width: 20rem;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  border-radius: 5px 0 0 5px;

  outline: 0;

  transition: border 100ms;

  @media (max-width: 576px) {
    border-radius: 10px;
  }

  :focus {
    border: 3px solid ${({ theme }) => theme.colors.yellow};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
  }
`;
