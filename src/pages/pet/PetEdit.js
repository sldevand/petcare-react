import React from 'react'
import GridPaper from '../../components/Container/GridPaper'
import PetEditForm from '../../components/Pet/PetEditForm'
import { connect } from 'react-redux';
import compose from 'recompose/compose';

class PetEdit extends React.Component {
    render() {
        const { success, loggedIn } = this.props;

        if (success || !loggedIn) {
            this.props.history.push(`/`);
        }

        return (
            <GridPaper>
                <PetEditForm routeMatch={this.props.match} routeHistory={this.props.history}></PetEditForm>
            </GridPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        success: state.petUpdateReducer.success
    };
}

export default compose(
    connect(mapStateToProps)
)(PetEdit);
