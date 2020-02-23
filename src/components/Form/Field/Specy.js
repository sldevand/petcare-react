import React from 'react'
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator'
import AbstractTextField from './AbstractTextField';

class Specy extends AbstractTextField {

    state = {
        specy: ''
    }

    constructor() {
        super();
        this.label = 'Specy';
        this.name  = 'specy';
        this.validators = ['required', 'minStringLength:3', 'maxStringLength:64', 'matchRegexp:^[a-zA-Z- ]*$'];
        this.errorMessages = ['This field is required', 'Minimum 3 characters', 'Maximum 64 characters', 'Lowercase and uppercase letters only'];
    }

    render() {
        const { specy } = this.state;

        return (
            <TextValidator
                label={this.label}
                onChange={this.handleChange}
                name={this.name}
                value={specy}
                validators={this.validators}
                errorMessages={this.errorMessages}
            />
        )
    }
}

export default Specy
