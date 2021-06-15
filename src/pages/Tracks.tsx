import React from 'react';

import { Loader } from '../components/Loader/index';
import { useTrack } from '../hooks/useTrack';
import {
  CheckIcon,
  PackageContainer,
  PackagesHistory,
  TrackContainer,
} from '../styles/pages/Tracks';

export default function Tracks(): JSX.Element {
  const { loading, trackCode, dataTrack } = useTrack();

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
          <TrackContainer>{dataTrack}</TrackContainer>
        </PackagesHistory>
      )}
    </PackageContainer>
  );
}
