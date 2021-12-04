import React from 'react';

import { ThemeProvider } from './Theme';
import { TrackingProvider } from './Tracking';

export const ContextProviders: React.FC = ({ children }) => (
  <ThemeProvider>
    <TrackingProvider>
      {children}
    </TrackingProvider>
  </ThemeProvider>
);
