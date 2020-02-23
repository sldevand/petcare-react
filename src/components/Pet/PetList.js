import React from 'react';
import GridPaper from '../Container/GridPaper';
import PetItem from './PetItem';
import { List, Divider } from '@material-ui/core';

class PetList extends React.Component {

    render() {
        const { petsData } = this.props;

        let pets = petsData.map((pet, index) => {
            let divider = (index < petsData.length - 1) 
            ? <Divider key={pet.id + "_divider"} variant="inset" component="li" />
            : '';

            return (
                <React.Fragment key={pet.id + "_frag"}>
                    <PetItem key={pet.id} name={pet.name} src={pet.src} dob={pet.dob}></PetItem>
                    {divider}
                </React.Fragment>
            )
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