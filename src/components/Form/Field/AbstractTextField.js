import React from 'react'

class AbstractTextField extends React.Component {

    handleChange = (event) => {
        let stateObject = function () {
            let returnObj = {};
            returnObj[this.target.name] = this.target.value;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
        this.props.handleChange(event);
    }
}

export default AbstractTextField
