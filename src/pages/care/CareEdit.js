import React from 'react';
import GridPaper from '../../components/Container/GridPaper';
import CareEditForm from '../../components/Care/CareEditForm';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

class CareEdit extends React.Component {
    render() {
        const { success, loggedIn } = this.props;

        if (success || !loggedIn) {
            this.props.history.push(`/`);
        }

        return (
            <GridPaper>
                <CareEditForm routeMatch={this.props.match} routeHistory={this.props.history}></CareEditForm>
            </GridPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        success: state.careUpdateReducer.success
    };
}

export default compose(
    connect(mapStateToProps)
)(CareEdit);
