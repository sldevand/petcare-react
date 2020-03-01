import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class PetItem extends React.Component {
    render() {
        const { id, name, dob, src } = this.props;

        return (
            <ListItem button id={id}>
                <ListItemAvatar >
                    <Avatar alt={name} src={src} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={dob} />
            </ListItem>
        );
    }
}

export default PetItem;