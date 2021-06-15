import React, { useState } from 'react';

import { Footer } from '../components/Footer';
import { useTrack } from '../hooks/useTrack';
import {
  CodeContainer,
  Input,
  Title,
  TrackBoxContainer,
} from '../styles/pages/Homepage';

export default function Homepage(): JSX.Element {
  const [code, setCode] = useState<string>('');

  const { getTrackingData } = useTrack();

  return (
    <>
      <TrackBoxContainer>
        <Title>
          <h1>
            Rastreio
            <span>.</span>
            fast
          </h1>
        </Title>
        <CodeContainer>
          <Input
            maxLength={15}
            type="text"
            value={code.toUpperCase()}
            onChange={(event) => setCode(event.target.value)}
            autoComplete="on"
            placeholder="Code here"
            required
          />
          <button type="button" onClick={() => getTrackingData(code)}>
            Track order
          </button>
        </CodeContainer>
      </TrackBoxContainer>
      <Footer />
    </>
  );
}
