import React from 'react';
import { withStyles } from '@material-ui/core';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import UserForm from '../UserForm';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { signupActions } from '../../../redux';
import FormWrapper from '../../Form/FormWrapper';
import SimpleBackdrop from '../../Loader/SimpleBackdrop';

const useStyles = theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
})

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
        const { loading } = this.props;
        const { email, firstName, lastName, password } = this.state;

        const fieldNames = ['email', 'firstName', 'lastName', 'password'];
        const submitButton = <Button type="submit" variant="contained" color="primary">Sign in</Button>

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={fieldNames}
                    handleChange={this.handleChange}
                    onSubmit={() => this.props.signup(email, firstName, lastName, password)}
                    submitButton={submitButton}
                />
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        success: state.signupReducer.success,
        message: state.signupReducer.message,
        loading: state.signupReducer.loading
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