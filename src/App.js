import React from 'react';
import NavBar from './components/NavBar/NavBar';
import MainFragment from './components/MainFragment/MainFragment';
import { Container } from '@material-ui/core';

class App extends React.Component {
  state = {
    step: 'subscribe'
  };

  handleSignupClick() {
    let state = {
      step: 'subscribe'
    };
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Container>
            <MainFragment step={this.state.step} handleSignupClick={() => this.handleSignupClick()} />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
