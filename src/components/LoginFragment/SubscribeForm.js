import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import UserForm from './UserForm';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
        repeatPassword: ''
    };

    handleSubmit = () => {
        console.log(this.state);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.password) {
                return false;
            }
            return true;
        });
    }

    handleFirstNameChange = (event) => {
        const firstName = event.target.value;
        this.setState({ firstName });
    }

    handleLastNameChange = (event) => {
        const lastName = event.target.value;
        this.setState({ lastName });
    }

    handleRepeatPasswordChange = (event) => {
        const repeatPassword = event.target.value;
        this.setState({ repeatPassword });
    }

    render() {
        const { classes } = this.props;
        const { email, firstName, lastName, password, repeatPassword } = this.state;
        return (
            <React.Fragment>
                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>Sign Up</h1>

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

                        <TextValidator
                            label="First name"
                            onChange={this.handleFirstNameChange}
                            name="firstName"
                            value={firstName}
                            validators={['required', 'minNumber:3', 'maxNumber:64', 'matchRegexp:^[a-zA-Z-]$']}
                            errorMessages={['this field is required']}
                        />

                        <TextValidator
                            label="Last Name"
                            onChange={this.handleLastNameChange}
                            name="lastName"
                            value={lastName}
                            validators={['required', 'minNumber:3', 'maxNumber:64', 'matchRegexp:^[a-zA-Z-]$']}
                            errorMessages={['this field is required']}
                        />

                        <TextValidator
                            label="Password"
                            onChange={this.handlePasswordChange}
                            name="password"
                            type="password"
                            validators={['required', 'minNumber:8', 'maxNumber:255']}
                            errorMessages={['this field is required', 'Between 8 and 255']}
                            value={password}
                        />

                        <TextValidator
                            label="Repeat password"
                            onChange={this.handleRepeatPasswordChange}
                            name="repeatPassword"
                            type="password"
                            validators={['isPasswordMatch', 'required', 'minNumber:8', 'maxNumber:255']}
                            errorMessages={['password mismatch', 'this field is required']}
                            value={repeatPassword}
                        />

                        <Grid container direction="row" justify="center" spacing={4}>
                            <Grid item><Button variant="outlined" color="secondary" onClick={this.props.cancelSubscribe}>Cancel</Button></Grid>
                            <Grid item><Button variant="contained" color="primary">Signup</Button></Grid>
                        </Grid>
                    </ValidatorForm>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(SubscribeForm);