import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { userActions } from '../../../redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import SuccessWithLink from '../../../components/Message/SuccessWithLink';
import GridPaper from '../../../components/Container/GridPaper';

const useStyles = theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    spacer: {
        margin: theme.spacing(2),
    }
});

class Activate extends React.Component {
    componentWillMount() {
        const { id, activationCode } = this.props.match.params;
        this.props.activateUser(id, activationCode);
    }

    render() {
        const { classes, message, loaded } = this.props;

        let content = loaded
            ? <SuccessWithLink message={message} to="/login" title="Login" />
            : <CircularProgress />;

        return (
            <GridPaper>
                <Grid item>
                    <Typography variant="h5" color="inherit" >User Activation</Typography>
                </Grid>
                <Grid item className={classes.spacer}>
                    {content}
                </Grid>
            </GridPaper>
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