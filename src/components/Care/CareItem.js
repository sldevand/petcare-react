import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import DateHelper from '../../helpers/dateHelper';

class CareItem extends React.Component {
    render() {
        const { id, petName, title, appointmentDate } = this.props;

        let to ='/care/' + petName + '/' + id;
        return (
            <ListItem button id={id} component={Link} to={to}>
                <ListItemText primary={title} secondary={DateHelper.toLocaleDateTimeString(appointmentDate, 'fr-FR')} />
            </ListItem>
        );
    }
}

export default CareItem;