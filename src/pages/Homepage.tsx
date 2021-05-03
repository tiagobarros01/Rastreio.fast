import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer';
import { TrackingContext } from '../contexts/TrackingContext';
import history from '../services/history';
import { Input, Title, TrackBoxContainer } from '../styles/pages/Homepage';
import dark from '../styles/themes/dark';

export default function Homepage() {
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
            required
            autoComplete="on"
          />
          <button
            type="button"
            onClick={handleSigned}
          >
            Track order
          </button>
        </div>
      </TrackBoxContainer>
      <Footer />
    </ThemeProvider>
  );
}
