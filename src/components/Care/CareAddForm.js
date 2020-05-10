import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import FormWrapper from '../Form/FormWrapper';
import SimpleBackdrop from '../Loader/SimpleBackdrop';
import { careActions } from '../../redux';
import UserForm from '../Form/AbstractForm';

class CareAddForm extends UserForm {

    state = {
        title: '',
        appointmentDate: new Date(),
        content: ''
    };

    constructor(props) {
        super(props);
        this.title="Add Care";
    }

    render() {
        const { loading } = this.props;
        const { title, appointmentDate, content } = this.state;
        const { name } = this.props.routeMatch.params;

        const fields = [
            {'type':'title','value':title},
            {'type':'datetimepicker','value':appointmentDate, 'id':'appointmentDate', 'label': 'Appointment Date' },
            {'type':'content','value':content}
        ];

        const submitButton = <Button type="submit" variant="contained" color="primary">{this.title}</Button>

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={fields}
                    handleChange={this.handleChange}
                    handleDateChange={this.handleDateChange}
                    handleDateTimeChange={this.handleDateTimeChange}
                    handleFileUploadChange={this.handleFileUploadChange}
                    onSubmit={() => this.props.addCare(name, title, appointmentDate, content)}
                    submitButton={submitButton}
                />
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.careAddReducer.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addCare: (name, title, appointmentDate, content) => {
            dispatch(careActions.add(name, title, appointmentDate, content))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CareAddForm);
