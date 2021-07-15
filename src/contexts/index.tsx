import React from 'react';

import { StoreProvider } from './StoreContext';
import { ThemeContextProvider } from './ThemeContext';
import { TrackingProvider } from './TrackingContext';

interface ContextProviderProps {
  children: React.ReactNode;
}

function ContextProvider({ children }: ContextProviderProps): JSX.Element {
  return (
    <ThemeContextProvider>
      <StoreProvider>
        <TrackingProvider>{children}</TrackingProvider>
      </StoreProvider>
    </ThemeContextProvider>
  );
}

export default ContextProvider;
