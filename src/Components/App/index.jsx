import React from 'react';

import Router from '../../Router';

import {ThemeProvider} from 'styled-components';

import GlobalStyles from '../../assets/styles/global-styles';
import ThemeDefault from '../../assets/styles/theme-default';

import {Container} from './styles';

function App() {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <Container>
        <GlobalStyles />
        <Router />
      </ Container>
    </ThemeProvider>
    
  )
};

export default App;
