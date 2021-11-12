import { useContext } from 'react';

import { TrackingContextData } from '../@types/TrackingContextData';
import { TrackingContext } from '../contexts/TrackingContext';

export const useTrack = (): TrackingContextData => useContext(TrackingContext);
