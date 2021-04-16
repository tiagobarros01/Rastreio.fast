/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';

import { TrackingContext } from '../../contexts/TrackingContext';
import {
  PackageContainer,
  PackagesHistory,
  LineHistory,
  LineHistoryContainer,
  PointContainer,
  InfoContainer,
} from './style';

export default function PackageHistory() {
  const { code, getTrackingData, dateHour } = useContext(TrackingContext);

  const handleSigned = () => {
    getTrackingData();
    console.log(code);
  };

  return (
    <PackageContainer>
      <PackagesHistory>
        <h1>{code}</h1>
        <LineHistoryContainer>
          <PointContainer>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </PointContainer>
          <LineHistory />
          <InfoContainer>
            <div>
              <p>{dateHour}</p>
            </div>
            <div>
              <p>{dateHour}</p>
            </div>
            <div>
              <p>{dateHour}</p>
            </div>
            <div>
              <p>{dateHour}</p>
            </div>
            <div>
              <p>{dateHour}</p>
            </div>
          </InfoContainer>
        </LineHistoryContainer>
      </PackagesHistory>
      <button type="button" onClick={handleSigned}>CLick me</button>
    </PackageContainer>
  );
}
