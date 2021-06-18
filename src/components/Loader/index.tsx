import React from 'react';

import { Spinner, LoaderContainer, Container } from './style';

export function Loader(): JSX.Element {
  return (
    <Container>
      <LoaderContainer>
        <Spinner />
      </LoaderContainer>
    </Container>
  );
}
