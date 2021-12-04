import React from 'react';

import { CollectionPopup } from '../CollectionPopup';
import { Header } from '../Header';
import { Wrapper } from './styles';

export const DashboardBase: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />

      {children}

      <CollectionPopup />
    </Wrapper>
  );
};
