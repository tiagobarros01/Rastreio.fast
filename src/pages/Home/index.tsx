import React, { FormEvent, useRef } from 'react';

import { Button } from 'src/components/Button';
import { DashboardBase } from 'src/components/DashboardBase';
import { Footer } from 'src/components/Footer';
import { Input } from 'src/components/Form/Input';
import { useTrack } from 'src/contexts/Tracking';

import {
  FormContainer,
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

          <Button type="submit" isLoading={isLoading}>
            Rastrear
          </Button>
        </FormContainer>
      </Container>

      <Footer />
    </DashboardBase>
  );
};
