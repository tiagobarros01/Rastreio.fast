import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const Input = styled(InputMask)`
  width: 20rem;
  padding: 1rem;

  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.inputText};

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
  }
`;
