import React from 'react'
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator'
import AbstractTextField from './AbstractTextField';

class LastName extends AbstractTextField {

    state = {
        lastName: ''
    }

    constructor() {
        super();
        this.label = 'Last name';
        this.name  = 'lastName';
        this.validators = ['required', 'minStringLength:3', 'maxStringLength:64', 'matchRegexp:^[a-zA-Z-]*$'];
        this.errorMessages = ['This field is required', 'Minimum 3 characters', 'Maximum 64 characters', 'Lowercase and uppercase letters only'];
    }

    render() {
        const { lastName } = this.state;

        return (
            <TextValidator
                label={this.label}
                onChange={this.handleChange}
                name={this.name}
                value={lastName}
                validators={this.validators}
                errorMessages={this.errorMessages}
            />
        )
    }
}

export default LastName
