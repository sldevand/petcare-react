import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import UserForm from './../UserForm';
import { passwordActions } from '../../../redux';
import FormWrapper from '../../Form/FormWrapper';
import { Button } from '@material-ui/core';
import SimpleBackdrop from '../../Loader/SimpleBackdrop';

class ResetForm extends UserForm {
    state = {
        email: ''
    }

    constructor() {
        super();
        this.title = 'Reset Password'
    }

    render() {
        const { loading } = this.props;
        const { email } = this.state;

        const fieldNames = ['email']
        const submitButton = <Button type="submit" variant="contained" color="primary">Send Mail</Button>

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={fieldNames}
                    handleChange={this.handleChange}
                    onSubmit={() => this.props.passwordReset(email)}
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
        passwordReset: (email) => {
            dispatch(passwordActions.reset(email))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ResetForm);

