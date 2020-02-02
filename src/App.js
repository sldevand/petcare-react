import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MessageSnackBar from './components/Message/MessageSnackBar';
import { withStyles } from '@material-ui/core/styles';
import Logout from './components/User/Logout/LogoutComponent';
import Account from './pages/user/account/Account';
import Login from './pages/user/Login';
import Signin from './pages/user/Signin';
import Activate from './pages/user/account/Activate';
import Reset from './pages/password/Reset';

const useStyles = theme => ({
  app: {
    height:'99vh',
    background:'#F0F0F0'
  }
});

class App extends React.Component {
  state = {
    title: 'PetCare'
  };

  render() {
    const { classes } = this.props;
    return (
      <Router >
        <div className={classes.app}>
          <header className="App-header">
            <NavBar title={this.state.title} />
          </header>

          <Switch>
              <Route path="/" exact render={(props) => <Home title={this.state.title} />} />
              <Route path="/account" exact component={Account} />
              <Route path="/account/activate/:id/:activationCode" component={Activate} />
              <Route path="/subscribe" render={(routeProps) => <Signin {...routeProps}/>}/>
              <Route path="/login" exact render={(routeProps) => <Login {...routeProps}/>} />
              <Route path="/logout" exact component={Logout} />
              <Route path="/passwordReset" exact render={(routeProps) => <Reset {...routeProps}/>} />
          </Switch>
          <MessageSnackBar />
        </div>
      </Router>

    );
  }
}

export default withStyles(useStyles)(App);
