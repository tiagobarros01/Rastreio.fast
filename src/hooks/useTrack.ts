import { useContext } from 'react';

import type { TrackingContextData } from 'src/@types/TrackingContextData';
import { TrackingContext } from 'src/contexts/TrackingContext';

export const useTrack = (): TrackingContextData => useContext(TrackingContext);
