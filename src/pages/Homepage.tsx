import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer';
import { TrackingContext } from '../contexts/TrackingContext';
import { Input, Title, TrackBoxContainer } from '../styles/pages/Homepage';
import dark from '../styles/themes/dark';

export default function Homepage() {
  const [code, setCode] = useState<string>('');

  const {
    getTrackingData,
  } = useContext(TrackingContext);

  return (
    <ThemeProvider theme={dark}>
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
            autoComplete="on"
            placeholder="Code here"
            required
          />
          <button
            type="button"
            onClick={() => getTrackingData(code)}
          >
            Track order
          </button>
        </div>
      </TrackBoxContainer>
      <Footer />
    </ThemeProvider>
  );
}
