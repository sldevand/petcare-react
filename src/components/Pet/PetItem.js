import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { petActions } from '../../redux';

class PetItem extends React.Component {

    componentDidMount() {
        const { id } = this.props;
        this.props.getPetImage(id);
    }

    render() {
        const { id, name, dob, petsData } = this.props;

        return (
            <ListItem button id={id}>
                <ListItemAvatar >
                    <Avatar alt={name} src={petsData.image} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={dob} />
            </ListItem>
        );
    }
}


const mapStateToProps = state => {
    return {
        loading: state.petGetImageReducer.loading,
        success: state.petGetImageReducer.success,
        petsData: state.petGetImageReducer.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPetImage: (id) => {
            dispatch(petActions.getPetImage(id))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PetItem);