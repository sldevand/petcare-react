import React from 'react';
import NavBar from './components/NavBar/NavBar';
import MainFragment from './components/MainFragment/MainFragment';
import { Container } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

class App extends React.Component {
  state = {
    step: 'subscribe',
    title: 'PetCare'
  };

  handleSignupClick() {
    this.setState({
      step: 'subscribe'
    });
  }

  cancelSuscribe() {
    this.setState({
      step: 'login'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar title={this.state.title} />
          <Container>
            <SnackbarProvider maxSnack={3}>
              <MainFragment
                step={this.state.step}
                handleSignupClick={() => this.handleSignupClick()}
                cancelSubscribe={() => this.cancelSuscribe()} />
            </SnackbarProvider>
          </Container>

        </header>
      </div>
    );
  }
}

export default App;
