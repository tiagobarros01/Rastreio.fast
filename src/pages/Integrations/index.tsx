import React from 'react';

import CorreiosLogo from '../img/correios-logo.svg';
import ViacepLogo from '../img/viacep-logo.svg';
import { Container } from './styles';

export const Integrations = (): JSX.Element => (
  <Container>
    <h1>Integrations</h1>
    <div>
      <img src={CorreiosLogo} alt="correios-logo" />
      <img src={ViacepLogo} alt="correios-logo" />
    </div>
  </Container>
  );
