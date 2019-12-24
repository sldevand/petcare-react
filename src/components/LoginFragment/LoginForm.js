import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import UserForm from './UserForm';
import PasswordField from '../Fields/PasswordField';

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

    handleSubmit = () => {
        console.log(this.state);
    }

    render() {
        const { classes } = this.props;
        const { email, password } = this.state;
        return (
            <React.Fragment>
                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>Log In</h1>

                    <ValidatorForm
                        className={classes.root}
                        ref="form"
                        onSubmit={this.handleSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            label="Email"
                            onChange={this.handleEmailChange}
                            name="email"
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />

                        <PasswordField
                            handleChange={this.handlePasswordChange}
                            value={password}
                        />

                        <Grid container direction="row" justify="center">
                            <Button type="submit" variant="contained" color="primary">Log In</Button>
                        </Grid>
                    </ValidatorForm>
                    <div className={classes.spacer}>No Account ?</div>
                    <Button variant="outlined" color="secondary" onClick={() => this.props.handleSignupClick()}>
                        Sign In
                    </Button>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(LoginForm);