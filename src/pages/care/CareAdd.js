import React from 'react';
import GridPaper from '../../components/Container/GridPaper';
import CareAddForm from '../../components/Care/CareAddForm';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

class CareAdd extends React.Component {
    render() {
        const { success, loggedIn } = this.props;

        if (success || !loggedIn) {
            const { name } = this.props.match.params;
            this.props.history.push(`/care/${name}`);
        }

        return (
            <GridPaper>
                <CareAddForm routeMatch={this.props.match} routeHistory={this.props.history}></CareAddForm>
            </GridPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        success: state.careAddReducer.success
    };
}

export default compose(
    connect(mapStateToProps)
)(CareAdd);
