import React from 'react';

import { useTrack } from '../hooks/useTrack';
import {
  Container,
  Details,
  Info,
  Loading,
  PointContainer,
  Point,
} from '../styles/pages/Error';

export default function Error(): JSX.Element {
  const { dataTrack } = useTrack();

  return (
    <Container>
      <Details>
        <h1>
          <span>Ops..! </span>
          Something of wrong isn&apos;t right 😞
        </h1>
        <p>{dataTrack}</p>
      </Details>
      <Info>
        <p>We redirect you to the main page, don&apos;t worry</p>
        <Loading>
          <PointContainer>
            <Point position="first" />
            <Point position="second" />
            <Point position="third" />
          </PointContainer>
        </Loading>
      </Info>
    </Container>
  );
}
