import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header';
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';

export default function Login() {
  return (
    <ThemeProvider theme={dark}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}
