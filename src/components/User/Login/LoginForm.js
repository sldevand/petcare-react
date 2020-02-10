import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import UserForm from '../UserForm';
import { loginActions } from '../../../redux';
import FormWrapper from '../../Form/FormWrapper';
import SimpleBackdrop from '../../Loader/SimpleBackdrop';

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
        const { loading } = this.props;
        const { email, password } = this.state;

        const fieldNames = ['email', 'password'];
        const submitButton = <Button type="submit" variant="contained" color="primary">Log In</Button>

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={fieldNames}
                    handleChange={this.handleChange}
                    onSubmit={() => this.props.login(email, password)}
                    submitButton={submitButton}
                />
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        loading:  state.loginReducer.loading
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
