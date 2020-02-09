import React, { Component } from 'react'
import Email from './Field/Email';
import Password from './Field/Password';

class Fields extends Component {
    buildFields = (fieldNames) => {
        return fieldNames.map(field => {
            switch (field) {
                case 'email':
                    return <Email key="email" handleChange={this.props.handleChange} />
                case 'password':
                    return <Password key="password" handleChange={this.props.handleChange} />
                default:
                    return null;
            }
        });
    }

    render() {
        const { fieldNames } = this.props;
        const fields = this.buildFields(fieldNames);

        return (
            <React.Fragment>
                {fields}
            </React.Fragment>
        )
    }
}

export default Fields
