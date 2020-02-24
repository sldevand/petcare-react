import React, { Component } from 'react'
import LoginForm from './../../components/User/Login/LoginForm'
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { loginActions } from './../../redux';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import GridPaper from './../../components/Container/GridPaper';

const useStyles = theme => ({
    button: {
        marginTop: theme.spacing(3)
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
            <GridPaper>
                <Grid container direction="column" justify="center" alignItems="center" >
                    <Grid item xs={12}>
                        <LoginForm />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className={classes.button} variant="outlined" color="secondary" component={Link} to="/PasswordReset">Forgot Password?</Button>
                    </Grid>
                </Grid>
            </GridPaper>
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
