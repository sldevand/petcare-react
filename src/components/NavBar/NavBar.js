import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SimpleDrawer from './SimpleDrawer';
import { Link } from 'react-router-dom';
import MainIcon from './../Icons/MainIcon';
import { SvgIcon } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';





const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    marginLeft: theme.spacing(2),

  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    const { title } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <SimpleDrawer />
            <SvgIcon component={MainIcon} viewBox="0 0 476 476" />
            <Typography variant="h6" className={classes.title} color="inherit" >
              {title}
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              <AccountBoxIcon />
              <Typography variant="button" className={classes.title} color="inherit" >
                Login
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(NavBar);
