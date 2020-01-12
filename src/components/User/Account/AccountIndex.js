import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';
import { userActions, loginActions } from '../../../redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
});

class AccountIndex extends React.Component {

    componentWillMount() {
        if (this.props.loggedIn === false) {
            this.props.history.push(`/`);
        }

        this.props.fetchUser();
    }

    render() {
        if (this.props.loggedIn === false) {
            this.props.history.push(`/`);
        }

        const { classes } = this.props;

        let content = <CircularProgress />;

        if (this.props.loaded) {
            content =
                <React.Fragment>
                    <h4>{this.props.firstName} {this.props.lastName} {this.props.email}</h4>
                    <Button variant="contained" color="secondary" onClick={this.props.logout}>Logout</Button>
                </React.Fragment>
        }

        return (
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>Your Account</h1>
                    {content}
                </Grid>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        firstName: state.userReducer.firstName,
        lastName: state.userReducer.lastName,
        email: state.userReducer.email,
        loaded: state.userReducer.loaded
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => {
            dispatch(userActions.fetchUser())
        },
        logout: () => {
            dispatch(loginActions.logout())
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(AccountIndex);