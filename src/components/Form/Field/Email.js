import React from 'react'
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator'
import AbstractTextField from './AbstractTextField';

class Email extends AbstractTextField {

    state = {
        email: this.props.value
    }

    constructor(props) {
        super(props);
        this.label = 'Email';
        this.name  = 'email';
        this.validators = ['required', 'isEmail'];
        this.errorMessages = ['This field is required', 'Email is not valid'];
    }

    render() {
        const { email } = this.state;

        return (
            <TextValidator
                label={this.label}
                onChange={this.handleChange}
                name={this.name}
                value={email}
                validators={this.validators}
                errorMessages={this.errorMessages}
            />
        )
    }
}

export default Email
