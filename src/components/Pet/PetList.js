import React from 'react';
import GridPaper from '../Container/GridPaper';
import PetItem from './PetItem';
import { List } from '@material-ui/core';

class PetList extends React.Component {

    render() {
        const {petsData} = this.props;

        let pets = petsData.map((pet) => {
            return <PetItem name={pet.name} src={pet.src} dob={pet.dob}></PetItem>
        })

        return (
            <GridPaper>
                <h3>My Pets</h3>
                <List>
                    {pets}
                </List>
            </GridPaper>

        );
    }
}

export default PetList;