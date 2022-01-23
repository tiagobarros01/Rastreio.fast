import React from 'react';
import Lottie, { Options } from 'react-lottie';

import { DashboardBase } from 'src/components/DashboardBase';
import NotFoundAnimation from 'src/lotties/404.json';

import { Container } from './styles';

const lottieOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: NotFoundAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}; ;

export const NotFound = (): JSX.Element => {
  return (
    <DashboardBase>
      <Container>
        <Lottie options={lottieOptions} width={800} height={400} />
      </Container>
    </DashboardBase>
  );
};
