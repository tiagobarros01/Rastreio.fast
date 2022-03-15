import React, { ComponentPropsWithoutRef } from 'react';

import {
  Container,
  Blade,
} from './styles';

type SpinnerProps = ComponentPropsWithoutRef<'div'>;

export const Spinner = (props: SpinnerProps): JSX.Element => {
  return (
    <Container className="center" {...props}>
      <>
        {[...Array(12)].map((_, index) => (
          <Blade key={`Blade - ${index}`} />
        ))}
      </>
    </Container>
  );
};
