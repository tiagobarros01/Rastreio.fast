/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header/index';
import TrackBox from './components/TrackBox/index';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Header />
      <TrackBox />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
