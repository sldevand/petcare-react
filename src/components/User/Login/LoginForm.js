import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import UserForm from '../UserForm';
import { loginActions } from '../../../redux';

const useStyles = theme => ({
    root: {
        '& .MuiTextField-root': {
            width: '100%',
            marginBottom: theme.spacing(4)
        },
    },
    button: {
        margin: theme.spacing(4)
    }
});

class LoginForm extends UserForm {

    state = {
        email: '',
        password: ''
    };

    render() {
        const { classes } = this.props;
        const { email, password } = this.state;

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <h1>Log In</h1>
                </Grid>
                <Grid item xs={12}>
                    <ValidatorForm
                        className={classes.root}
                        ref="form"
                        onSubmit={() => this.props.login(email, password)}
                        onError={errors => console.error(errors)}
                    >
                        <TextValidator
                            label="Email"
                            onChange={this.handleChange}
                            name="email"
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />

                        <TextValidator
                            label="Password"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            value={password}
                            validators={['required', 'minStringLength:8', 'maxStringLength:255']}
                            errorMessages={['this field is required', 'Minimum 8 characters', 'Maximum 255 characters']}
                        />

                        <Grid item xs={12}>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Button type="submit" variant="contained" color="primary">Log In</Button>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
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
        login: (email, password) => {
            dispatch(loginActions.login(email, password))
        },
        isLoggedIn: () => {
            dispatch(loginActions.isLoggedIn())
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
