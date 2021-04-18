import React from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import TrackBox from '../components/TrackBox';
import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';

export default function Homepage() {
  return (
    <ThemeProvider theme={dark}>
      <Header />
      <TrackBox />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}
