import React, { useContext } from 'react';

import { Loader } from '../components/Loader/index';
import { TrackingContext } from '../contexts/TrackingContext';
import {
  CheckIcon,
  PackageContainer,
  PackagesHistory,
  TrackContainer,
} from '../styles/pages/Tracks';

export default function Tracks() {
  const { loading, trackCode, dataTrack } = useContext(TrackingContext);

  return (
    <PackageContainer>
      {loading === true ? (
        <Loader />
      ) : (
        <PackagesHistory>
          <h1>
            {trackCode}
            <CheckIcon />
          </h1>
          <TrackContainer>
            {dataTrack}
          </TrackContainer>
        </PackagesHistory>
      )}
    </PackageContainer>
  );
}
