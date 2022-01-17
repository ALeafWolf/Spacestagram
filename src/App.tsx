import React from 'react';
import '@fontsource/roboto';
import Container from '@mui/material/Container';
import classes from './Style.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import theme from './theme';
import Nav from './Nav';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} className={classes.mainContainer}>
          <Nav />
          <Main />
        </Container>
      </ThemeProvider>

    );
  }
}

export default App;
