import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import SubscribeForm from './../../components/User/Signin/SubscribeForm';
import GridPaper from './../../components/Container/GridPaper';
import SuccessWithLink from './../../components/Message/SuccessWithLink';

class Signin extends Component {
    render() {
        const { success, message } = this.props;

        let content = success
            ? <SuccessWithLink message={message} to="/login" title="Login" />
            : <SubscribeForm />;

        return (
            <GridPaper>
                {content}
            </GridPaper>
        );
    }
}
const mapStateToProps = state => {
    return {
        success: state.signupReducer.success,
        message: state.signupReducer.message
    };
}

export default compose(
    connect(mapStateToProps)
)(Signin);