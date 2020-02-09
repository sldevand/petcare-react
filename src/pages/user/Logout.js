import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import GridPaper from './../../components/Container/GridPaper';
import LogoutComponent from './../../components/User/Logout/LogoutComponent';

class Logout extends Component {

    componentWillMount() {
        if (this.props.loggedIn === false) {
            this.props.history.push(`/`);
        }
    }

    componentDidUpdate() {
        if (this.props.loggedIn === false) {
            this.props.history.push(`/`);
        }
    }

    render() {
        const { history } = this.props;

        return (
            <GridPaper>
                <LogoutComponent history={history} />
            </GridPaper>
        );
    }
}
const mapStateToProps = state => {
    return {
        success: state.logoutReducer.success,
        message: state.logoutReducer.message,
        loggedIn: state.loginReducer.loggedIn
    };
}

export default compose(
    connect(mapStateToProps)
)(Logout);