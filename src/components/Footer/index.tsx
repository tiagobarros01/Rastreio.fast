import React from 'react';

import { FooterContainer } from './style';

export function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <p>
        Created with 💛 by
        <a
          target="_blank"
          href="https://github.com/TiagoBarros01"
          rel="noreferrer"
        >
          {' '}
          Tiago Barros
        </a>
      </p>
    </FooterContainer>
  );
}
