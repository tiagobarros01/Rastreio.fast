import { useContext } from 'react';

import { TrackingContext, TrackingContextData } from '../contexts/TrackingContext';

export function useTrack(): TrackingContextData {
  const ctx = useContext(TrackingContext);

  return ctx;
}
