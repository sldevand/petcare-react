import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import UserForm from './../UserForm';
import { passwordActions } from '../../../redux';
import FormWrapper from '../../Form/FormWrapper';
import { Button } from '@material-ui/core';

class ResetForm extends UserForm {
    state = {
        email: ''
    }

    constructor() {
        super();
        this.title='Reset Password'
    }

    render() {
        const { email } = this.state;
        
        const fieldNames = ['email']
        const submitButton = <Button type="submit" variant="contained" color="primary">Send Mail</Button> 

        return (
            <FormWrapper
                title={this.title}
                fieldNames={fieldNames}
                handleChange={this.handleChange}
                onSubmit={() => this.props.passwordReset(email)}
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
        passwordReset: (email) => {
            dispatch(passwordActions.reset(email))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ResetForm);

