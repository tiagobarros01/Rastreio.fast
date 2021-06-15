import { useContext } from 'react';

import { TrackingContext } from '../contexts/TrackingContext';
import { TrackingContextData } from '../types/TrackingContextData';

export function useTrack(): TrackingContextData {
  const ctx = useContext(TrackingContext);

  return ctx;
}
