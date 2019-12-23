import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
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

class SubscribeForm extends React.Component {

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

    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }

    handleRepeatPasswordChange = (event) => {
        const repeatPassword = event.target.value;
        this.setState({ repeatPassword });
    }

    render() {
        const { classes } = this.props;
        const { email, firstName, lastName,password, repeatPassword } = this.state;
        return (
            <React.Fragment>
                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>Subscribe</h1>

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
                            onChange={this.handleEmailChange}
                            name="firstName"
                            value={firstName}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <TextValidator
                            label="Last Name"
                            onChange={this.handleEmailChange}
                            name="lastName"
                            value={email}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                        <TextValidator
                            label="Password"
                            onChange={this.handlePasswordChange}
                            name="password"
                            type="password"
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={password}
                        />

                        <TextValidator
                            label="Repeat password"
                            onChange={this.handleRepeatPasswordChange}
                            name="repeatPassword"
                            type="password"
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={['password mismatch', 'this field is required']}
                            value={repeatPassword}
                        />
                        <Grid container direction="row" justify="center">
                            <Button variant="contained" color="primary">Sign Up</Button>
                        </Grid>
                    </ValidatorForm>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(SubscribeForm);