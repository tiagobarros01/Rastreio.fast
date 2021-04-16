/* eslint-disable react/require-default-props */
import React from 'react';

import { TrackingProvider } from './TrackingContext';

interface ContextProviderProps {
  children?: React.ReactNode
}

function ContextProvider({ children }: ContextProviderProps) {
  return (
    <TrackingProvider>
      {children}
    </TrackingProvider>
  );
}

export default ContextProvider;
