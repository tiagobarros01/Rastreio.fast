import React from 'react';

import { CEPInput } from '../components/Input/index';
import { Container, Title } from '../styles/pages/SearchCEP';

export default function SearchCEP(): JSX.Element {
  return (
    <Container>
      <Title>
        <h1>
          Search
          {' '}
          <span>CEP</span>
        </h1>
      </Title>
      <div>
        <CEPInput
          autoFocus
          required
        />
        <button type="button">Search</button>
      </div>
    </Container>
  );
}
