import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MessageSnackBar from './components/Message/MessageSnackBar';
import { withStyles } from '@material-ui/core/styles';
import Logout from './pages/user/Logout';
import Account from './pages/user/account/Account';
import Login from './pages/user/Login';
import Signin from './pages/user/Signin';
import Activate from './pages/user/account/Activate';
import Reset from './pages/password/Reset';
import Change from './pages/password/Change';
import Page404 from './pages/error/Page404';
import config from './config';
import PetAdd from './pages/pet/PetAdd';
import PetIndex from './pages/pet/PetIndex';
import PetEdit from './pages/pet/PetEdit';
import CareIndex from './pages/care/CareIndex';
import CareSheet from './pages/care/CareSheet';
import CareAdd from './pages/care/CareAdd';
import CareEdit from './pages/care/CareEdit';

const useStyles = theme => ({
  app: {
    height: '110vh',
    background: '#F0F0F0'
  }
});

class App extends React.Component {
  state = {
    title: 'PetCare'
  };

  render() {
    const { classes } = this.props;
    return (
      <Router basename={config.baseUrl}>
        <div className={classes.app}>
          <header className="App-header">
            <NavBar title={this.state.title} />
          </header>

          <Switch>
            <Route path="/" exact render={(props) => <Home />} />
            <Route path="/account" exact component={Account} />
            <Route path="/account/activate/:id/:activationCode" component={Activate} />
            <Route path="/subscribe" render={(routeProps) => <Signin {...routeProps} />} />
            <Route path="/login" exact render={(routeProps) => <Login {...routeProps} />} />
            <Route path="/logout" exact render={(routeProps) => <Logout {...routeProps} />} />
            <Route path="/passwordReset" exact render={(routeProps) => <Reset {...routeProps} />} />
            <Route path="/passwordChange/:id/:resetCode" component={Change} />} />
            <Route path="/pet/add" exact render={(routeProps) => <PetAdd {...routeProps} />} />} />
            <Route path="/pet/edit/:name" exact render={(routeProps) => <PetEdit {...routeProps} />} />} />
            <Route path="/pet/:name" exact render={(routeProps) => <PetIndex {...routeProps} />} />} />
            <Route path="/care/:name" exact render={(routeProps) => <CareIndex {...routeProps} />} />} />
            <Route path="/care/add/:name" exact render={(routeProps) => <CareAdd {...routeProps} />} />} />
            <Route path="/care/edit/:name/:id" exact render={(routeProps) => <CareEdit {...routeProps} />} />} />
            <Route path="/care/:name/:id" exact render={(routeProps) => <CareSheet {...routeProps} />} />} />            
            <Route render={(routeProps) => <Page404 {...routeProps} />} />
          </Switch>
          <MessageSnackBar />
        </div>
      </Router>
    );
  }
}

export default withStyles(useStyles)(App);
