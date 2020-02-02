import React, { Component } from 'react'
import LoginForm from '../../components/User/Login/LoginForm'
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { loginActions } from '../../redux';
import { Grid, Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = theme => ({
    button: {
        margin: theme.spacing(4)
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
});

class Login extends Component {

    componentWillMount() {
        if (this.props.loggedIn === true) {
            this.props.history.push(`/`);
        }
    }

    render() {
        const { classes, loggedIn } = this.props;

        if (loggedIn === true) {
            this.props.history.push(`/`);
        }
        return (
            <Grid container direction="column" justify="center" alignItems="center"  xs={12}>
                <Grid item >
                    <Paper className={classes.paper} elevation={3}>
                        <Grid container direction="column" justify="center" alignItems="center" >
                            <Grid item >
                                <LoginForm />
                            </Grid>
                            <Grid item >
                                <Button className={classes.button} variant="outlined" color="secondary" component={Link} to="/PasswordReset">Forgot Password?</Button>
                            </Grid>
                        </ Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {
        isLoggedIn: () => {
            dispatch(loginActions.isLoggedIn())
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(Login);
