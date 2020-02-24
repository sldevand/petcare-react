import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import GridPaper from '../Container/GridPaper';
import PetItem from './PetItem';
import { List, Divider, CircularProgress, Grid, Typography } from '@material-ui/core';
import { petActions } from '../../redux';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = theme => ({
    root: {
        width: '100%',
        maxWidth: 520
    },
    cardTitle: {
        margin: theme.spacing(3, 2),
    },
    cardContent: {
        margin: theme.spacing(3, 2),
    },
});

class PetList extends React.Component {
    componentDidMount() {
        this.props.getList();
    }

    createPetItems(petsData) {
        if (Object.keys(petsData).length === 0) {
            return [];
        }

        return Object.keys(petsData).map((index) => {
            const pet = petsData[index];
            let divider = (index < petsData.length - 1)
                ? <Divider key={pet.id + "_divider"} variant="inset" component="li" />
                : '';

            return (
                <React.Fragment key={pet.id + "_frag"}>
                    <PetItem key={pet.id} name={pet.name} src={pet.image} dob={pet.dob} />
                    {divider}
                </React.Fragment>
            )
        })
    }

    createContent(loading, pets) {

        return (loading)
            ? <CircularProgress />
            : (pets.length > 0)
                ? <List>
                    {pets}
                </List>
                : <h5>You have no pets, click on the + button to add one</h5>
    }

    render() {
        const { petsData, success, loading, classes } = this.props;

        let pets = [];
        if (success) {
            pets = this.createPetItems(petsData);
        }

        let content = this.createContent(loading, pets);

        return (
            <GridPaper>
                <div className={classes.root}>
                    <div className={classes.cardTitle}>
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                            <Grid item>
                                <PetsIcon fontSize="large" color="primary" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" color="inherit" >
                                    My Pets
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.cardContent}>
                        {content}
                    </div>
                </div>
            </GridPaper>

        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.petListReducer.loading,
        success: state.petListReducer.success,
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
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(PetList);
