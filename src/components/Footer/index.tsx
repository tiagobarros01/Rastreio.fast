import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from './style';

export function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <p>
        Created with 💛 by
        {' '}
        <Link
          target="_blank"
          to="https://github.com/TiagoBarros01"
          rel="noreferrer"
        >
          Tiago Barros
        </Link>
      </p>
    </FooterContainer>
  );
}
