import React, { useContext } from 'react';

import { TrackingContext } from '../contexts/TrackingContext';
import {
  InfoContainer,
  LineHistory,
  LineHistoryContainer,
  PackageContainer,
  PackagesHistory,
  PointContainer,
} from '../styles/pages/Tracks';

export default function Tracks() {
  const {
    code, getTrackingData, dateHour, city, uf, description,
  } = useContext(
    TrackingContext,
  );

  const handleSigned = () => {
    getTrackingData();
    console.log(code);
  };

  return (
    <>
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
                <p>
                  <strong>City: </strong>
                  {city}
                  <br />
                  <strong>State: </strong>
                  {uf}
                  <br />
                  <strong>Date-hour: </strong>
                  {dateHour}
                  <br />
                  <strong>Description: </strong>
                  {description}
                </p>
              </div>
              <div>
                <p>a</p>
              </div>
              <div>
                <p>a</p>
              </div>
              <div>
                <p>a</p>
              </div>
              <div>
                <p>a</p>
              </div>
            </InfoContainer>
          </LineHistoryContainer>
        </PackagesHistory>
        <button type="button" onClick={handleSigned}>
          CLick me
        </button>
      </PackageContainer>
    </>
  );
}
