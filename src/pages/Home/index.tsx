import React, { useCallback, useRef } from 'react';

import { Footer } from '../../components/Footer';
import { useTrack } from '../../hooks/useTrack';
import {
  CodeContainer,
  Input,
  Title,
  Container,
} from './styles';

export const Home = (): JSX.Element => {
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
            placeholder="Código de rastreio"
            required
          />
          <button type="button" onClick={() => handleTrack()}>
            Rastrear
          </button>
        </CodeContainer>
      </Container>

      <Footer />
    </>
  );
};
