/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header/index';
import TrackBox from './components/TrackBox/index';
import Footer from './components/Footer/index';
import { AppContainer } from './styles/pages/App';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Header />
      <AppContainer>
        <TrackBox />
        <Footer />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
