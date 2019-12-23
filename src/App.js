import React from 'react';
import NavBar from './components/NavBar/NavBar';
import MainFragment from './components/MainFragment/MainFragment';
import { Container } from '@material-ui/core';

class App extends React.Component {
  state = {
    step: 'login',
    title: 'PetCare'
  };

  handleSignupClick() {
    let state = {
      step: 'subscribe'
    };
    this.setState(state);
  }

  cancelSuscribe() {
    let state = {
      step: 'login'
    };
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar title={this.state.title}/>
          <Container>
            <MainFragment
              step={this.state.step}
              handleSignupClick={() => this.handleSignupClick()}
              cancelSubscribe={() => this.cancelSuscribe()} />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
