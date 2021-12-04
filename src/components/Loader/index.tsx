import React from 'react';

import { Spinner, LoaderContainer, Container } from './style';

export const Loader = (): JSX.Element => (
  <Container>
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  </Container>
);
