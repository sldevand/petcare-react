import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import UserForm from '../UserForm';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { signupActions } from '../../../redux';

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
        const { classes } = this.props;
        const { email, firstName, lastName, password, repeatPassword } = this.state;

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12} sm={8}>
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
                            errorMessages={['This field is required', 'Not a valid email']}
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
                            errorMessages={['This field is required', 'Minimum 3 characters', 'Maximum 64 characters', 'lowercase and uppercase letters only']}
                        />

                        <TextValidator
                            label="Password"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            value={password}
                            validators={['required', 'minStringLength:8', 'maxStringLength:255']}
                            errorMessages={['This field is required', 'Minimum 8 characters', 'Maximum 255 characters']}
                        />

                        <TextValidator
                            label="Repeat password"
                            onChange={this.handleChange}
                            name="repeatPassword"
                            type="password"
                            value={repeatPassword}
                            validators={['isPasswordMatch','required', 'minStringLength:8', 'maxStringLength:255']}
                            errorMessages={['Password mismatch','This field is required', 'Minimum 8 characters', 'Maximum 255 characters']}
                        />
                        <Grid item xs={12}>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Button type="submit" variant="contained" color="primary" >Sign Up</Button>
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