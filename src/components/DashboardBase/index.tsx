import React from 'react';

import { Header } from '../Header';
import { Wrapper } from './styles';

export const DashboardBase: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />

      {children}
    </Wrapper>
  );
};
