/* eslint-disable no-unused-vars */
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
      </PackageContainer>
      <button type="button" onClick={handleSigned}>
        CLick me
      </button>
    </>
  );
}
