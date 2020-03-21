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
        return fieldNames.map((field) => {
            switch (field.type) {
                case 'email':
                    return <Email key="email" handleChange={this.props.handleChange} value={field.value}/>
                case 'password':
                    return <Password key="password" handleChange={this.props.handleChange} value={field.value}/>
                case 'firstName':
                    return <FirstName key="firstName" handleChange={this.props.handleChange} value={field.value}/>
                case 'lastName':
                    return <LastName key="lastName" handleChange={this.props.handleChange}  value={field.value} />
                case 'name':
                    return <Name key="name" handleChange={this.props.handleChange} value={field.value}/>
                case 'specy':
                    return <Specy key="specy" handleChange={this.props.handleChange} value={field.value}/>
                case 'dob':
                    return <Dob key="dob" handleDateChange={this.props.handleDateChange} value={field.value}/>
                case 'image':
                    return <ImageUploader key="image" handleFileUploadChange={this.props.handleFileUploadChange} value={field.value} />
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
