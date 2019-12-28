import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import UserForm from './UserForm';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import MessageSnackBar from '../Message/MessageSnackBar';
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
        success: false,
        message: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, firstName, lastName, password } = this.state;

        fetch('http://petcare/user/subscribe', {
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "firstName": firstName,
                "lastName": lastName,
                "password": password
            }),
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if (email === json.email) {
                this.setState({
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: '',
                    repeatPassword: '',
                    success: true,
                    message: json.message
                });

                return;
            }

            if(json.errors){
                this.setState({   
                    success: false,
                    message: json.errors
                });

                return;
            }

        }).catch((error) => {
            this.setState({   
                success: false,
                message: error
            });
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
        const { email, firstName, lastName, password, repeatPassword, success, message } = this.state;

        let validatorForm = '';
        let errorSnackBar='';
        if (!success) {
            errorSnackBar = message ? errorSnackBar = <MessageSnackBar variant="error" message={message}></MessageSnackBar> : '';
            validatorForm =
                <ValidatorForm
                    className={classes.root}
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={(err)=>{console.error(err)}}
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
                    <MessageSnackBar variant="success" message={this.state.message}></MessageSnackBar>
                </Grid>
        }

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Sign Up</h1>
                {validatorForm}
                {errorSnackBar}
            </Grid>
        );
    }
}

export default withStyles(useStyles)(SubscribeForm);