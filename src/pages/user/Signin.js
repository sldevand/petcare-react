import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { signupActions } from '../../redux';
import SubscribeSuccess from '../../components/User/Signin/SubscribeSuccess';
import SubscribeForm from '../../components/User/Signin/SubscribeForm';
import GridPaper from '../../components/Container/GridPaper';

const useStyles = theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
});

class Signin extends Component {
    render() {
        const { success, message } = this.props;

        let content = '';
        if (!success) {
            content = <SubscribeForm />
        } else {
            content = <SubscribeSuccess message={message} />
        }

        return (
            <GridPaper>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <h1>Sign Up</h1>
                    </Grid>
                    <Grid item xs={12}>
                        {content}
                    </Grid>
                </Grid>
            </GridPaper>
        );
    }
}
const mapStateToProps = state => {
    return {
        success: state.signupReducer.success,
        message: state.signupReducer.message
    };
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (email, firstName, lastName, password) => {
            dispatch(signupActions.signup(email, firstName, lastName, password))
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(Signin);