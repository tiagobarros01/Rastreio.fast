import React from 'react';

import { ThemeContextProvider } from './ThemeContext';
import { TrackingProvider as NewTrackingProvider } from './Tracking';
import { TrackingProvider } from './TrackingContext';

export const ContextProvider: React.FC = ({ children }) => (
  <ThemeContextProvider>
    <NewTrackingProvider>
      <TrackingProvider>{children}</TrackingProvider>
    </NewTrackingProvider>
  </ThemeContextProvider>
  );
