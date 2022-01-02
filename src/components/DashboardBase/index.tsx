import React, { ComponentPropsWithoutRef } from 'react';

import { CollectionPopup } from '../CollectionPopup';
import { Header } from '../Header';
import { Wrapper } from './styles';

type IDashboardBaseProps = ComponentPropsWithoutRef<'div'>

export const DashboardBase: React.FC<IDashboardBaseProps> = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Header />

      {children}

      <CollectionPopup />
    </Wrapper>
  );
};
