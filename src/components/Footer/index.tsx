import React, { ComponentPropsWithoutRef } from 'react';

import { FooterContainer } from './style';

type IFooterProps = ComponentPropsWithoutRef<'div'>;

export const Footer = (props: IFooterProps): JSX.Element => (
  <FooterContainer {...props}>
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
