import React from 'react'
import GridPaper from '../../components/Container/GridPaper'
import PetAddEditForm from '../../components/Pet/PetAddEditForm'

class PetAdd extends React.Component {
    render() {
        return (
            <GridPaper>
                <PetAddEditForm></PetAddEditForm>
            </GridPaper>
        )
    }
}

export default PetAdd
