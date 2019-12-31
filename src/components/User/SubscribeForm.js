import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { signupActions } from '../../redux';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
    root: {
        '& .MuiTextField-root': {
            width: '100%',
            marginBottom: theme.spacing(4)
        },
    },
    button: {
        margin: theme.spacing(4)
    },
    spacer: {
        margin: theme.spacing(4)
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
});

class SubscribeForm extends UserForm {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: ''
    };

    componentDidMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.password) {
                return false;
            }
            return true;
        });
    }

    render() {
        const { classes, success, message } = this.props;
        const { email, firstName, lastName, password, repeatPassword } = this.state;

        let validatorForm = '';
        if (!success) {
            validatorForm =
                <ValidatorForm
                    className={classes.root}
                    ref="form"
                    onSubmit={() => { this.props.signup(this.state.email, this.state.firstName, this.state.lastName, this.state.password) }}
                    onError={(err) => { console.error(err) }}
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
                        label="First name"
                        onChange={this.handleChange}
                        name="firstName"
                        value={firstName}
                        validators={['required', 'minStringLength:3', 'maxStringLength:64', 'matchRegexp:^[a-zA-Z-]*$']}
                        errorMessages={['this field is required', 'Minimum 3 characters', 'Maximum 64 characters', 'lowercase and uppercase letters only']}
                    />

                    <TextValidator
                        label="Last Name"
                        onChange={this.handleChange}
                        name="lastName"
                        value={lastName}
                        validators={['required', 'minStringLength:3', 'maxStringLength:64', 'matchRegexp:^[a-zA-Z-]*$']}
                        errorMessages={['this field is required', 'Minimum 3 characters', 'Maximum 64 characters', 'lowercase and uppercase letters only']}
                    />

                    <TextValidator
                        label="Password"
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        validators={['required', 'minStringLength:8', 'maxStringLength:255']}
                        errorMessages={['this field is required', 'Minimum 8 characters', 'Maximum 255 characters']}
                        value={password}
                    />

                    <TextValidator
                        label="Repeat password"
                        onChange={this.handleChange}
                        name="repeatPassword"
                        type="password"
                        validators={['required', 'minStringLength:8', 'maxStringLength:255']}
                        errorMessages={['this field is required', 'Minimum 8 characters', 'Maximum 255 characters']}
                        value={repeatPassword}
                    />

                    <Grid container direction="row" justify="center" spacing={4}>
                        <Grid item><Button type="submit" variant="contained" color="primary" >Sign Up</Button></Grid>
                    </Grid>
                </ValidatorForm>
        } else {
            validatorForm =
                <Grid container direction="column" justify="center" alignItems="center">
                    <h3>{message}</h3>
                    <Grid item><Button variant="outlined" color="secondary" component={Link} to="/login">Login</Button></Grid>
                </Grid>
        }

        return (
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>Sign Up</h1>
                    {validatorForm}
                </Grid>
            </Paper>
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
)(SubscribeForm);