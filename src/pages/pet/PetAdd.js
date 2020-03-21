import React from 'react'
import GridPaper from '../../components/Container/GridPaper'
import PetAddForm from '../../components/Pet/PetAddForm'
import { connect } from 'react-redux';
import compose from 'recompose/compose';

class PetAdd extends React.Component {
    render() {
        const { success, loggedIn } = this.props;

        if (success || !loggedIn) {
            this.props.history.push(`/`);
        }

        return (
            <GridPaper>
                <PetAddForm></PetAddForm>
            </GridPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        success: state.petAddReducer.success
    };
}

export default compose(
    connect(mapStateToProps)
)(PetAdd);
