import React from 'react';

import { Inner, LoaderContainer } from './style';

export function Loader(): JSX.Element {
  return (
    <LoaderContainer>
      <Inner />
    </LoaderContainer>
  );
}
