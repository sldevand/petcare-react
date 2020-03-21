import React from 'react'
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator'

class AbstractTextField extends React.Component {

    handleChange = (event) => {
        this.props.handleChange(event);
    }

    render() {
        const { value } = this.props;

        return (
            <TextValidator
                label={this.label}
                onChange={this.handleChange}
                name={this.name}
                value={value || ""}
                type={this.type}
                validators={this.validators}
                errorMessages={this.errorMessages}
            />
        )
    }
}

export default AbstractTextField
