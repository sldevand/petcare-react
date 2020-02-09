import React from 'react';
import Button from '@material-ui/core/Button';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import UserForm from '../UserForm';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { signupActions } from '../../../redux';
import FormWrapper from '../../Form/FormWrapper';

class SubscribeForm extends UserForm {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: ''
    };

    constructor() {
        super();
        this.title = 'Sign In'
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
        const { email, firstName, lastName, password } = this.state;

        const fieldNames = ['email', 'firstName', 'lastName', 'password'];
        const submitButton = <Button type="submit" variant="contained" color="primary">Sign up</Button>

        return (
            <FormWrapper
                title={this.title}
                fieldNames={fieldNames}
                handleChange={this.handleChange}
                onSubmit={() => this.props.signup(email, firstName, lastName, password)}
                submitButton={submitButton}
            />
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
    connect(mapStateToProps, mapDispatchToProps)
)(SubscribeForm);