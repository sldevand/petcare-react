import React from 'react';
import LoginForm from '../LoginFragment/LoginForm';
import SubscribeForm from '../LoginFragment/SubscribeForm';


class MainFragment extends React.Component {

    constructor() {
        super();
        this.state = this.props;
    }

    whichForm() {
        switch (this.props.step) {
            case 'login':
                return <LoginForm handleSignupClick={this.props.handleSignupClick} />;
            case 'subscribe':
                return <SubscribeForm />;
            default:
                return <LoginForm />

        }
    }

    render() {
        const form = this.whichForm();

        return (
            <React.Fragment>
                {form}
            </React.Fragment>
        );
    }
}

export default MainFragment;