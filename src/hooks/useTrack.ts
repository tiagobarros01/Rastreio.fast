import { useContext } from 'react';

import { TrackingContext } from '../contexts/TrackingContext';

export function useTrack() {
  const ctx = useContext(TrackingContext);

  return ctx;
}
