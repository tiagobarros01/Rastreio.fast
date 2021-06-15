import React from 'react';

import { ThemeContextProvider } from './ThemeContext';
import { TrackingProvider } from './TrackingContext';

interface ContextProviderProps {
  children: React.ReactNode;
}

function ContextProvider({ children }: ContextProviderProps) {
  return (
    <ThemeContextProvider>
      <TrackingProvider>{children}</TrackingProvider>
    </ThemeContextProvider>
  );
}

export default ContextProvider;
