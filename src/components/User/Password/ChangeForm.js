import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import AbstractForm from './../../Form/AbstractForm';
import { passwordActions } from '../../../redux';
import FormWrapper from '../../Form/FormWrapper';
import { Button } from '@material-ui/core';
import SimpleBackdrop from '../../Loader/SimpleBackdrop';

class ChangeForm extends AbstractForm {
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
        const { id, resetCode, loading } = this.props;
        const fieldNames = [
            { 'type': 'email', 'value': email },
            { 'type': 'password', 'value': password }
        ]

        const submitButton = <Button type="submit" variant="contained" color="primary">Confirm</Button>

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={fieldNames}
                    handleChange={this.handleChange}
                    onSubmit={() => this.props.passwordChange(email, id, resetCode, password)}
                    submitButton={submitButton}
                />
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.passwordReducer.loading
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

