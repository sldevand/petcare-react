import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import UserForm from './UserForm';
import { loginActions } from '../../redux';
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
        padding : theme.spacing(2)
    }
});

class LoginForm extends UserForm {

    state = {
        email: '',
        password: ''
    };

    componentWillMount() {
        if (localStorage.getItem('apiKey')) {
            this.props.history.push(`/`);
        }
    }

    render() {
        const { classes } = this.props;
        const { email, password } = this.state;

        return (
            <Paper className={classes.paper} elevation={3} >
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Log In</h1>

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
                        validators={['required', 'minStringLength:8', 'maxStringLength:255']}
                        errorMessages={['this field is required', 'Minimum 8 characters', 'Maximum 255 characters']}
                        value={password}
                    />

                    <Grid container direction="row" justify="center">
                        <Button type="submit" variant="contained" color="primary">Log In</Button>
                    </Grid>
                </ValidatorForm>
            </Grid>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    return {
        success: state.loginReducer.success,
        message: state.loginReducer.message
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => {
            dispatch(loginActions.login(email, password))
        }       
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);