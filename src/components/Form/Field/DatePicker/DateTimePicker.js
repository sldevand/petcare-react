import 'date-fns';
import React from 'react';
import { MuiPickersUtilsProvider,  KeyboardDateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class DateTimePicker extends React.Component {
    handleDateTimeChange = selectedDateTime => {
        this.props.handleDateTimeChange(selectedDateTime);
    };

    render() {
        const { value, label, id } = this.props;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDateTimePicker
                    margin="normal"
                    id={id}
                    label={label}
                    format="MM/dd/yyyy hh:mm:ss"
                    value={value || new Date()}
                    onChange={this.handleDateTimeChange}
                    KeyboardButtonProps={{
                        'aria-label': 'date time picker',
                    }}
                />
            </MuiPickersUtilsProvider>
        )
    }
}

export default DateTimePicker
