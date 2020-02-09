import React from 'react'
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { logoutActions } from '../../../redux';
import { Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
});

class LogoutComponent extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <h3>Are you sure you want to logout ?</h3>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" onClick={this.props.history.goBack}>Cancel</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="secondary" onClick={this.props.logout}>Logout</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logoutActions.logout())
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(LogoutComponent);

