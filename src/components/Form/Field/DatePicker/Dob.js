import 'date-fns';
import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DateHelper from '../../../../helpers/dateHelper';

class Dob extends React.Component {
    handleDateChange = selectedDate => {
        this.props.handleDateChange(selectedDate);
    };

    render() {
        const { value } = this.props;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="dob"
                    label="Date Of Birth"
                    format={DateHelper.getDateTimeFormatFromLocale('fr-FR')}
                    value={value || new Date()}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        )
    }
}

export default Dob
