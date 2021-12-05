import React from 'react';

import { Spinner } from '../Spinner';
import { ButtonBase, IButtonProps } from './styles';

export const Button: React.FC<IButtonProps> = ({ isLoading, ...rest }): JSX.Element => {
  return (
    <ButtonBase {...rest}>
      {isLoading ? <Spinner /> : rest.children}
    </ButtonBase>
  );
};
