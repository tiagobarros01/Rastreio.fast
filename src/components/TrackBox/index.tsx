/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';

import { TrackingContext } from '../../contexts/TrackingContext';
import { TrackBoxContainer, Title, Input } from './style';

function TrackBox() {
  const {
    code, setCode, getTrackingData,
  } = useContext(TrackingContext);
  // const [trackCode, setTrackCode] = useState(code);

  const handleSigned = () => {
    getTrackingData();
    console.log(code);
  };

  return (
    <TrackBoxContainer>
      <Title>
        <h1>
          Rastreio
          <span>.</span>
          fast
        </h1>
      </Title>
      <div>
        <Input
          max="10"
          type="text"
          value={code.toUpperCase()}
          onChange={(event) => setCode(event.target.value)}
        />
        <button
          type="button"
          onClick={handleSigned}
        >
          Track order
        </button>
      </div>
    </TrackBoxContainer>
  );
}

export default TrackBox;
