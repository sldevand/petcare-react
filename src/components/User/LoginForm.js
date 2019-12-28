import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import UserForm from './UserForm';
import MessageSnackBar from '../Message/MessageSnackBar';

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

class LoginForm extends UserForm {

    state = {
        email: '',
        password: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        fetch('http://petcare/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if (email === json.email) {
                this.setState({
                    success: true,
                    message: json.message
                });

                return;
            }

            if (json.errors) {
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

    render() {
        const { classes } = this.props;
        const { email, password, success, message } = this.state;
        let snackBar = '';


        if (!success) {
            snackBar = message ? <MessageSnackBar variant="error" message={message} /> : '';
        } else {
            snackBar = message ? <MessageSnackBar variant="success" message={message} /> : '';
        }

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Log In</h1>

                <ValidatorForm
                    className={classes.root}
                    ref="form"
                    onSubmit={this.handleSubmit}
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
                        validators={['required', 'minStringLength:8', 'maxStringLength:255']}
                        errorMessages={['this field is required', 'Minimum 8 characters', 'Maximum 255 characters']}
                        value={password}
                    />

                    <Grid container direction="row" justify="center">
                        <Button type="submit" variant="contained" color="primary">Log In</Button>
                    </Grid>
                </ValidatorForm>
                {snackBar}
            </Grid>
        );
    }
}

export default withStyles(useStyles)(LoginForm);