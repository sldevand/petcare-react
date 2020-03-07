import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

class PetItem extends React.Component {
    render() {
        const { id, name, dob, src } = this.props;

        let to ='/pet/' + name;
        return (
            <ListItem button id={id} component={Link} to={to}>
                <ListItemAvatar > 
                    <Avatar alt={name} src={src} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={dob} />
            </ListItem>
        );
    }
}

export default PetItem;