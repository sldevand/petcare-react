import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import UserForm from '../UserForm';
import { loginActions } from '../../../redux';
import FormWrapper from '../../Form/FormWrapper';

class LoginForm extends UserForm {

    state = {
        email: '',
        password: ''
    };

    constructor() {
        super()
        this.title = "Log In"
    }

    render() {
        const { email, password } = this.state;

        const fieldNames = ['email', 'password'];
        const submitButton =  <Button type="submit" variant="contained" color="primary">Log In</Button>

        return (
            <FormWrapper
                title={this.title}
                fieldNames={fieldNames}
                handleChange={this.handleChange}
                onSubmit={() => this.props.login(email, password)}
                submitButton={submitButton}
            />            
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
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
