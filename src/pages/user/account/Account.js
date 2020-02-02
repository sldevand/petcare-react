import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Fab } from '@material-ui/core';
import { userActions, loginActions } from '../../../redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import AccountInfos from './../../../components/User/Account/AccountInfos';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
      },
});

class Account extends React.Component {

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
            content = <AccountInfos {...this.props} />
        }

        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper} elevation={3} >
                        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                            <Grid item xs={6}>
                                {content}
                            </Grid>
                        </Grid>
                    </Paper>

                </Grid>
                <Fab className={classes.fab} size="medium" color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </Grid>

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
)(Account);