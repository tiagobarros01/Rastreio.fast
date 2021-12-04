import React, { useRef } from 'react';

import { Footer } from 'src/components/Footer';
import { useTrack } from 'src/contexts/Tracking';
import { useRoutes } from 'src/services/useRoutes';

import {
  CodeContainer,
  Input,
  Title,
  Container,
} from './styles';

export const Home = (): JSX.Element => {
  const { getTrackingData, isLoading } = useTrack();

  const codeInputRef = useRef<HTMLInputElement>(null);

  const handleTrack = async () => {
    await getTrackingData(codeInputRef.current?.value || '');

    useRoutes('/tracks');
  };

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
            maxLength={15}
            placeholder="Código de rastreio"
            required
            ref={codeInputRef}
          />

          <button type="button" onClick={() => handleTrack()}>
            {isLoading ? 'Carregando' : 'Rastrear'}
          </button>
        </CodeContainer>
      </Container>

      <Footer />
    </>
  );
};
