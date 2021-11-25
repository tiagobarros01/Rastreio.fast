import React from 'react';

import { FooterContainer } from './style';

export const Footer = (): JSX.Element => (
  <FooterContainer>
    <p>
      Criado com 💛 por
      {' '}
      <a
        target="_blank"
        href="https://github.com/TiagoBarros01"
        rel="noreferrer"
      >
        Tiago Barros
      </a>
    </p>
  </FooterContainer>
  );
