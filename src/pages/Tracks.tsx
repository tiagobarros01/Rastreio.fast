import React, { useContext } from 'react';

import { TrackingContext } from '../contexts/TrackingContext';
import {
  CheckIcon,
  InfoContainer,
  LineHistory,
  LineHistoryContainer,
  PackageContainer,
  PackagesHistory,
} from '../styles/pages/Tracks';

export default function Tracks() {
  const { dataTrack, trackCode } = useContext(TrackingContext);

  // const handleSigned = () => {
  //   getTrackingData();
  // };

  return (
    <>
      <PackageContainer>
        <PackagesHistory>
          <h1>
            {trackCode}
            <CheckIcon />
          </h1>
          <LineHistoryContainer>
            <LineHistory />
            <InfoContainer>
              {dataTrack}
            </InfoContainer>
          </LineHistoryContainer>
        </PackagesHistory>
        {/* <button type="button" onClick={handleSigned}>
          CLick me
        </button> */}
      </PackageContainer>
    </>
  );
}
