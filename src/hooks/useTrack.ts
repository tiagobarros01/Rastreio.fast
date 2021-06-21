import { useContext } from 'react';

import { TrackingContextData } from '../@types/TrackingContextData';
import { TrackingContext } from '../contexts/TrackingContext';

export function useTrack(): TrackingContextData {
  const ctx = useContext(TrackingContext);

  return ctx;
}
