import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import GridPaper from '../../components/Container/GridPaper';
import ChangeForm from '../../components/User/Password/ChangeForm';
import SuccessWithLink from './../../components/Message/SuccessWithLink';

class Change extends Component {

    render() {
        const { id, resetCode } = this.props.match.params;
        const { success, message } = this.props;

        let content = '';
        if (!success) {
            content = <ChangeForm id={id} resetCode={resetCode} />
        } else {
            content = <SuccessWithLink message={message} to="/login" title="Login" />
        }

        return (
            <GridPaper >
                 {content}
            </GridPaper>  
        )
    }
}

const mapStateToProps = state => {
    return {
        success: state.passwordReducer.success,
        message: state.passwordReducer.message
    };
}

export default compose(
    connect(mapStateToProps)
)(Change);
