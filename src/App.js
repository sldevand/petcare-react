import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SubscribeForm from './components/User/SubscribeForm';
import LoginForm from './components/User/LoginForm';
import MessageSnackBar from './components/Message/MessageSnackBar';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = theme => ({
  app: {
    height:'100vh'
  }
});

class App extends React.Component {
  state = {
    title: 'PetCare'
  };

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.app}>
          <header className="App-header">
            <NavBar title={this.state.title} />
          </header>

          <Switch>
            <Box className={classes.app}>
              <Route path="/" exact render={(props) => <Home title={this.state.title} />} />
              <Route path="/subscribe" component={SubscribeForm} />
              <Route path="/login" component={LoginForm} />
            </Box>

          </Switch>
          <MessageSnackBar />
        </div>
      </Router>

    );
  }
}

export default withStyles(useStyles)(App);
