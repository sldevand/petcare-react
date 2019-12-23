import React from 'react';

class UserForm extends React.Component 
{
    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }

    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }
}

export default UserForm;