import React from 'react';
import { TextValidator } from 'react-material-ui-form-validator';

class PasswordField extends React.Component {
    render() {
        const {password} = this.props;

        console.log('password render called');
        return (
            <TextValidator
                label="Password"
                onChange={this.props.handleChange}
                name="password"
                type="password"
                validators={['required', 'minNumber:8', 'maxNumber:255']}
                errorMessages={['this field is required', 'Between 8 and 255']}
                value={password}
            />
        );
    }
}

export default PasswordField;