import React, { Component } from 'react'
import GridPaper from '../../components/Container/GridPaper'
import ResetForm from '../../components/User/Password/ResetForm'

class Reset extends Component {
    
    render() {
        return (
            <GridPaper >
                 <ResetForm />
            </GridPaper>  
        )
    }
}

export default Reset;
