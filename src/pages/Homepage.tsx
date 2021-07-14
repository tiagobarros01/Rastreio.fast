import React, { useCallback, useRef } from 'react';

import { Footer } from '../components/Footer';
import { useTrack } from '../hooks/useTrack';
import {
  CodeContainer,
  Input,
  Title,
  Container,
} from '../styles/pages/Homepage';

export default function Homepage(): JSX.Element {
  const valueInputRef = useRef<HTMLInputElement>(null);

  const { getTrackingData } = useTrack();

  const handleTrack = useCallback(() => {
    getTrackingData(String(valueInputRef.current?.value));
  }, [getTrackingData]);

  return (
    <>
      <Container>
        <Title>
          <h1>
            Rastreio
            <span>.</span>
            fast
          </h1>
        </Title>
        <CodeContainer>
          <Input
            type="text"
            ref={valueInputRef}
            maxLength={15}
            placeholder="Code here"
            required
          />
          <button type="button" onClick={() => handleTrack()}>
            Track order
          </button>
        </CodeContainer>
      </Container>
      <Footer />
    </>
  );
}
