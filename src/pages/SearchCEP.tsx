import React from 'react';

import { CEPContainer, CEPTitle, CEPInput } from '../styles/pages/SearchCEP';

export default function SearchCEP(): JSX.Element {
  return (
    <CEPContainer>
      <CEPTitle>
        <h1>
          Search
          {' '}
          <span>CEP</span>
        </h1>
      </CEPTitle>
      <div>
        <CEPInput
          type="number"
          maxLength={8}
          min="0"
          max="99999999"
          required
          autoComplete="on"
        />
        <button type="button">Search</button>
      </div>
    </CEPContainer>
  );
}
