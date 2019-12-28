import React from 'react';
import LoginForm from '../User/LoginForm';
import SubscribeForm from '../User/SubscribeForm';
import ErrorPage from '../Error/ErrorPage'

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
                return <SubscribeForm cancelSubscribe={this.props.cancelSubscribe} />;
            case 'subscribe_success':
                    return <SubscribeForm cancelSubscribe={this.props.cancelSubscribe} />;
            default:
                return <ErrorPage />
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