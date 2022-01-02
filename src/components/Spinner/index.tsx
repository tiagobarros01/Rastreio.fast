import React from 'react';

import {
  Container,
  Blade,
} from './styles';

export const Spinner = (): JSX.Element => {
  return (
    <Container className="center">
      <>
        {[...Array(12)].map(() => (
          <Blade />
        ))}
      </>
    </Container>
  );
};
