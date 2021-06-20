import React, { useState } from 'react';

import { CEPInput } from '../components/Input/index';
import { Container, Title, CEPContainer } from '../styles/pages/SearchCEP';

export default function SearchCEP(): JSX.Element {
  const [CEP, setCEP] = useState('');

  return (
    <Container>
      <Title>
        <h1>
          Search
          <span>CEP</span>
        </h1>
      </Title>
      <CEPContainer>
        <CEPInput
          value={CEP}
          onChange={(event) => setCEP(event.target.value)}
          required
        />
        <button type="button">Search</button>
      </CEPContainer>
    </Container>
  );
}
