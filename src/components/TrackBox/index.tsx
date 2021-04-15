import React, { useState } from 'react';
import api from '../../services/api';
import {
  TrackBoxContainer, Title, Input,
} from './style';

function TrackBox() {
  const [code, setCode] = useState('OO135195662BR');
  const [trackingData, setTrackingData] = useState();

  async function getTrackingData() {
    const { data } = await api.get(`v1?codigo=${code}`);

    setTrackingData(data[0].descricao);
    console.log(data[0]);
  }

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
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button type="button" onClick={getTrackingData}>Track order</button>
        {trackingData}
      </div>
    </TrackBoxContainer>
  );
}

export default TrackBox;
