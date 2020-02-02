import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';
import { userActions } from '../../../redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

const useStyles = theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
});

class Activate extends React.Component {
    componentWillMount() {
        const { id, activationCode } = this.props.match.params;
        this.props.activateUser(id, activationCode);
    }

    render() {
        const { classes, message, loaded } = this.props;

        let content = <CircularProgress />;
        if (loaded) {
            content =
                <React.Fragment>
                    <h3>{message}</h3>
                    <Button variant="contained" color="primary" component={Link} to={'/login'}>Go to Login Form</Button>
                </React.Fragment>
        }        

        return (
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>User Activation</h1>
                    {content}
                </Grid>
            </Paper>

        );
    }
}

const mapStateToProps = state => {
    return {
        activated: state.userReducer.activated,
        loaded: state.userReducer.loaded,
        message: state.userReducer.message
    };
}

const mapDispatchToProps = dispatch => {
    return {
        activateUser: (id, activationCode) => {
            dispatch(userActions.activateUser(id, activationCode))
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(Activate);