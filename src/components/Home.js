import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Paper, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = theme => ({
    spacer: {
        margin: theme.spacing(4)
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
});

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        const { title } = this.props;

        let noAccount = '';

        if (!this.props.loggedIn) {
            noAccount =
                <React.Fragment>
                    <div className={classes.spacer}>No Account ?</div>
                    <Button variant="outlined" color="secondary" component={Link} to="/subscribe">Sign Up</Button>
                </React.Fragment>
        }

        return (
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>Welcome To {title}</h1>
                    <Grid item >
                        <h4>This app is a notebook where you can save your pet(s) health care.</h4>
                    </Grid>
                    {noAccount}
                </Grid>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps)
)(Home);
