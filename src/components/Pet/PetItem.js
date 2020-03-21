import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import DateHelper from '../../helpers/dateHelper';

class PetItem extends React.Component {
    render() {
        const { id, name, dob, src } = this.props;

        let to ='/pet/' + name;
        return (
            <ListItem button id={id} component={Link} to={to}>
                <ListItemAvatar > 
                    <Avatar alt={name} src={src} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={DateHelper.getAge(dob) + ' Years old'}  />
            </ListItem>
        );
    }
}

export default PetItem;