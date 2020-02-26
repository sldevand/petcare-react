import React from 'react';

class UserForm extends React.Component {
    handleChange = (event) => {
        let stateObject = function () {
            let returnObj = {};
            returnObj[this.target.name] = this.target.value;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
    }

    handleDateChange = (dob) => {
        this.setState({dob});
    }

    handleFileUploadChange = (event, name) => {
        console.log(event)
        let stateObject = function () {
            let returnObj = {};
            returnObj[name] = this.target.result;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
    }
}

export default UserForm;