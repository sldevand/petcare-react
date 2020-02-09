import React from 'react'
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator'
import AbstractTextField from './AbstractTextField';

class Password extends AbstractTextField {

    state = {
        password: ''
    }

    constructor() {
        super();
        this.label = 'Password';
        this.name  = 'password';
        this.type  = 'password' 
        this.validators = ['required', 'minStringLength:8', 'maxStringLength:255'];
        this.errorMessages = ['this field is required', 'Minimum 8 characters', 'Maximum 255 characters'];
    }

    render() {
        const { password } = this.state;

        return (
            <TextValidator
                label={this.label}
                onChange={this.handleChange}
                name={this.name}
                type={this.type}
                value={password}
                validators={this.validators}
                errorMessages={this.errorMessages}
            />
        )
    }
}

export default Password
