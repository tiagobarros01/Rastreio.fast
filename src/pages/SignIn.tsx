import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header/index';
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';

export default function SignIn() {
  return (
    <ThemeProvider theme={dark}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}
