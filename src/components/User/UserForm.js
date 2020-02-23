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
}

export default UserForm;