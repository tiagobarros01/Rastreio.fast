import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';

export default function Tracks() {
  return (
    <ThemeProvider theme={dark}>
      <h1>Tracks</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
