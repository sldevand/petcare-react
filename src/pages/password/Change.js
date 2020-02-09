import React, { Component } from 'react'
import GridPaper from '../../components/Container/GridPaper';
import ChangeForm from '../../components/User/Password/ChangeForm';

class Change extends Component {

    render() {
        const { id, resetCode } = this.props.match.params;

        return (
            <GridPaper >
                 <ChangeForm id={id} resetCode={resetCode}/>
            </GridPaper>  
        )
    }
}

export default Change;
