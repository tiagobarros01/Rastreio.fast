/* eslint-disable consistent-return */
import { ComponentPropsWithoutRef } from 'react';

import styled, { css } from 'styled-components';

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  isLoading?: boolean;
}

export const ButtonBase = styled.button<IButtonProps>`
  display: flex;

  flex: 1;
  align-items: center;
  justify-content: center;

  width: 6rem;

  padding: 0 1rem;

  border: 0;
  border-radius: 0 5px 5px 0;

  background: ${({ theme }) => theme.colors.brand[400]};

  transition: background 200ms ease-in-out, color 200ms ease-in-out, filter 200ms ease-in-out;

  :hover {
    background: ${({ theme }) => theme.colors.brand[500]};

    ${({ theme }) => {
    if (theme.title === 'dark') {
      return css`
        color: ${theme.colors.base[900]}
      `;
    }
  }
}

  :focus {
    filter: brightness(0.9);
  }

  @media (max-width: 576px) {
    margin-top: 1rem;

    width: 45%;

    border-radius: 5px;

    padding: 0.8rem;
  }
`;
