import React, { FormEvent, useRef } from 'react';

import { DashboardBase } from 'src/components/DashboardBase';
import { Footer } from 'src/components/Footer';
import { useTrack } from 'src/contexts/Tracking';

import {
  FormContainer,
  Input,
  TitleContainer,
  Container,
} from './styles';

export const Home = (): JSX.Element => {
  const { getTrackingData, isLoading } = useTrack();

  const codeInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!codeInputRef.current?.value) {
      console.log('Vazio');

      return;
    }

    await getTrackingData(codeInputRef.current.value);
  };

  return (
    <DashboardBase>
      <Container>
        <TitleContainer>
          <h1>
            Rastreio
            <span>.</span>
            fast
          </h1>
        </TitleContainer>

        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            maxLength={15}
            placeholder="Código de rastreio"
            required
            ref={codeInputRef}
          />

          <button type="submit">
            {isLoading ? 'Carregando' : 'Rastrear'}
          </button>
        </FormContainer>
      </Container>

      <Footer />
    </DashboardBase>
  );
};
