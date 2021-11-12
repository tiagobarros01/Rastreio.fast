import React from 'react';

import { ThemeContextProvider } from './ThemeContext';
import { TrackingProvider } from './TrackingContext';

export const ContextProvider: React.FC = ({ children }) => (
  <ThemeContextProvider>
    <TrackingProvider>{children}</TrackingProvider>
  </ThemeContextProvider>
  );
