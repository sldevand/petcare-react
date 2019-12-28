import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SubscribeForm from './components/User/SubscribeForm';
import LoginForm from './components/User/LoginForm';

class App extends React.Component {
  state = {
    title: 'PetCare'
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar title={this.state.title} />
          </header>

          <Switch>
            <Route path="/" exact render={(props) => <Home title={this.state.title} />} />
            <Route path="/subscribe" component={SubscribeForm} />
            <Route path="/login" component={LoginForm} />
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
