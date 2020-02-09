import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import UserForm from './../UserForm';
import { passwordActions } from '../../../redux';
import FormWrapper from '../../Form/FormWrapper';
import { Button } from '@material-ui/core';

class ChangeForm extends UserForm {
    state = {
        email: '',
        password: ''
    }

    constructor() {
        super();
        this.title = 'Change Password'
    }

    render() {
        const { email, password } = this.state;
        const { id, resetCode} = this.props;

        const fieldNames = ['email', 'password', 'confirmPassword']
        const submitButton = <Button type="submit" variant="contained" color="primary">Confirm</Button>

        return (
            <FormWrapper
                title={this.title}
                fieldNames={fieldNames}
                handleChange={this.handleChange}
                onSubmit={() => this.props.passwordChange(email, id, resetCode, password)}
                submitButton={submitButton}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        loaded: state.passwordReducer.loaded
    };
}

const mapDispatchToProps = dispatch => {
    return {
        passwordChange: (email, id, resetCode, password) => {
            dispatch(passwordActions.change(email, id, resetCode, password))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ChangeForm);

