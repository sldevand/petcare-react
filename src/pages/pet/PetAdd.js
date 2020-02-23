import React from 'react'
import GridPaper from '../../components/Container/GridPaper'
import PetAddEditForm from '../../components/Pet/PetAddEditForm'
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
                <PetAddEditForm></PetAddEditForm>
            </GridPaper>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        success: state.petReducer.success
    };
}

export default compose(
    connect(mapStateToProps)
)(PetAdd);
