import 'date-fns';
import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class Dob extends React.Component {

    state = {
        selectedDate: new Date()
    }

    handleDateChange = selectedDate => {
        this.setState({
            selectedDate
        });

        this.props.handleDateChange(selectedDate);
    };

    render() {

        const { selectedDate } = this.state;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="dob"
                    label="Date Of Birth"
                    format="MM/dd/yyyy"
                    value={selectedDate}
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
