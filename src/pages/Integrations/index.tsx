import React from 'react';

import { DashboardBase } from 'src/components/DashboardBase';

import { Container } from './styles';

export const Integrations = (): JSX.Element => (
  <DashboardBase>
    <Container>
      <h1>Integrações</h1>

      <div>
        <img src="/images/correios-logo.svg" alt="correios-logo" />
        <img src="/images/viacep-logo.svg" alt="correios-logo" />
      </div>
    </Container>
  </DashboardBase>
);
