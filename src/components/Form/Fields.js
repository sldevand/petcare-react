import React, { Component } from 'react'
import Email from './Field/Email';
import Password from './Field/Password';
import FirstName from './Field/FirstName';
import LastName from './Field/LastName';
import Name from './Field/Name';
import Specy from './Field/Specy';
import Dob from './Field/DatePicker/Dob';
import ImageUploader from './Field/Upload/ImageUploader';

class Fields extends Component {
    buildFields = (fieldNames) => {
        return fieldNames.map(field => {
            switch (field) {
                case 'email':
                    return <Email key="email" handleChange={this.props.handleChange} />
                case 'password':
                    return <Password key="password" handleChange={this.props.handleChange} />
                case 'firstName':
                    return <FirstName key="firstName" handleChange={this.props.handleChange} />
                case 'lastName':
                    return <LastName key="lastName" handleChange={this.props.handleChange} />
                case 'name':
                    return <Name key="name" handleChange={this.props.handleChange} />
                case 'specy':
                    return <Specy key="specy" handleChange={this.props.handleChange} />
                case 'dob':
                    return <Dob key="dob" handleDateChange={this.props.handleDateChange} />
                case 'image':
                    return <ImageUploader key="image" handleFileUploadChange={this.props.handleFileUploadChange} />
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
