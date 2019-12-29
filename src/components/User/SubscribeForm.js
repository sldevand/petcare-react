import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import UserForm from './UserForm';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import MessageSnackBar from '../Message/MessageSnackBar';
import { userActions } from '../../services/user.service';
import { Link } from 'react-router-dom';

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
    }
});

class SubscribeForm extends UserForm {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        open: false
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, firstName, lastName, password } = this.state;

        userActions.subscribe(email, firstName, lastName, password)
            .then((state) => {
                this.setState(state);
            })
            .catch((state) => {
                this.setState(state);
            });
    }

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
        const { email, firstName, lastName, password, repeatPassword, success, message,open } = this.state;

        let variant = success ? 'success' : 'error';
        let snackBar = <MessageSnackBar variant={variant} message={message} open={open} onClose={() => { this.setState({ open: false }) }} />
        let validatorForm = '';
        if (!success) {
            validatorForm =
                <ValidatorForm
                    className={classes.root}
                    ref="form"
                    onSubmit={this.handleSubmit}
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
                    <h3>{this.state.message}</h3>
                    <Grid item><Button variant="outlined" color="secondary" component={Link} to="/login">Login</Button></Grid>
                </Grid>
        }

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Sign Up</h1>
                {validatorForm}
                {snackBar}
            </Grid>
        );
    }
}

export default withStyles(useStyles)(SubscribeForm);