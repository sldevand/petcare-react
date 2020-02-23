import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import GridPaper from '../Container/GridPaper';
import PetItem from './PetItem';
import { List, Divider } from '@material-ui/core';
import { petActions } from '../../redux';

class PetList extends React.Component {

    componentDidMount() {
        this.props.getList();
    }

    render() {
        const { petsData } = this.props;

        let pets = [];
        console.log(petsData)
        if (Object.keys(petsData).length > 0) {
            pets = Object.keys(petsData).map((index) => {
                const pet = petsData[index];
                let divider = (index < petsData.length - 1)
                    ? <Divider key={pet.id + "_divider"} variant="inset" component="li" />
                    : '';

                return (
                    <React.Fragment key={pet.id + "_frag"}>
                        <PetItem key={pet.id} name={pet.name} src={pet.image} dob={pet.dob}></PetItem>
                        {divider}
                    </React.Fragment>
                )
            })
        }

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

const mapStateToProps = state => {
    return {
        loading: state.petListReducer.loading,
        petsData: state.petListReducer.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getList: () => {
            dispatch(petActions.getList())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PetList);
