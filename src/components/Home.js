import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    spacer: {
        margin: theme.spacing(4)
    }
});

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        const { title } = this.props;
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Welcome To {title}</h1>
                <Grid item justify="center" alignItems="center"><h4>This app is a notebook where you can save your pet(s) health care.</h4></Grid>
                <div className={classes.spacer}>No Account ?</div>
                <Button variant="outlined" color="secondary" component={Link} to="/subscribe">Sign Up</Button>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(Home);