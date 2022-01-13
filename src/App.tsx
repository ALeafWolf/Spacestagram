import React from 'react';
import '@fontsource/roboto';
import Container from '@mui/material/Container';
import './Style.css';

import Nav from './Nav';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Nav />
        <Main />
      </Container>
    );
  }
}

export default App;
