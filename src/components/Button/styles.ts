import { ComponentPropsWithoutRef } from 'react';

import styled from 'styled-components';

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

  background: ${({ theme }) => theme.colors.yellow[100]};

  transition: 200ms;

  :hover {
    filter: brightness(0.8);

    color: ${({ theme }) => theme.colors.textHover};
  }

  @media (max-width: 576px) {
    margin-top: 1rem;

    width: 45%;
  }
`;
