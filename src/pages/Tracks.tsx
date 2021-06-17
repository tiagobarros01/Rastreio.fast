import React from 'react';

import { Loader } from '../components/Loader/index';
import { useTrack } from '../hooks/useTrack';
import {
  CheckIcon,
  Container,
  PackagesHistory,
  TrackContainer,
} from '../styles/pages/Tracks';

export default function Tracks(): JSX.Element {
  const { loading, trackCode, dataTrack } = useTrack();

  return (
    <Container>
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
    </Container>
  );
}
