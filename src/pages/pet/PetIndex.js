import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import GridPaper from '../../components/Container/GridPaper';
import PetInfos from '../../components/Pet/PetInfos';

class PetIndex extends React.Component {
    render() {
        const { loggedIn } = this.props;
        const { name } = this.props.match.params;

        if (!loggedIn) {
            this.props.history.push(`/`);
        }

        return (
            <GridPaper>
                <PetInfos routeMatch={this.props.match} routeHistory={this.props.history}></PetInfos>
            </GridPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
}

export default compose(
    connect(mapStateToProps)
)(PetIndex);
