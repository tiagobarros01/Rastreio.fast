import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';

export default function Error() {
  return (
    <ThemeProvider theme={dark}>
      <h1>Error</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}