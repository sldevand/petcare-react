import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SimpleDrawer from './SimpleDrawer';
import MainIcon from './../Icons/MainIcon';
import { SvgIcon } from '@material-ui/core';
import AccountButton from '../User/AccountButton';

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
            <AccountButton />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(NavBar);
