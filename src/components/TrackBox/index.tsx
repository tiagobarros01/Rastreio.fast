/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { TrackingContext } from '../../contexts/TrackingContext';
import history from '../../services/history';
import { TrackBoxContainer, Title, Input } from './style';

function TrackBox() {
  const {
    code, setCode, getTrackingData,
  } = useContext(TrackingContext);

  const handleClick = () => history.push('/tracks');

  const handleSigned = () => {
    getTrackingData();
    handleClick();
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
          maxLength="15"
          type="text"
          value={code.toUpperCase()}
          onChange={(event) => setCode(event.target.value)}
          required
          autoComplete="on"
        />
        <button
          type="button"
          onClick={handleSigned}
        >
          Track order
        </button>
        <p>Ex: OO135195662BR</p>
      </div>
    </TrackBoxContainer>
  );
}

export default TrackBox;
