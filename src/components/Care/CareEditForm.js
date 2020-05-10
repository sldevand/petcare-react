import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import FormWrapper from '../Form/FormWrapper';
import SimpleBackdrop from '../Loader/SimpleBackdrop';
import { careActions } from '../../redux';
import UserForm from '../Form/AbstractForm';

class CareEditForm extends UserForm {

    state = {
        id: '',
        title: '',
        appointmentDate: new Date(),
        content: ''
    };

    constructor(props) {
        super(props);
        this.title = "Edit Care";
    }

    componentDidMount() {
        const { name, id } = this.props.routeMatch.params;
        this.props.getOne(name, id);
    }

    componentWillReceiveProps(nextProps) {
        const { id, title, appointmentDate, content } = nextProps.data;
        this.setState({ id, title, appointmentDate, content });
    }

    render() {
        const { loading } = this.props;
        const { title, appointmentDate, content } = this.state;
        const { name, id } = this.props.routeMatch.params;

        const fields = [
            { 'type': 'title', 'value': title },
            { 'type': 'datetimepicker', 'value': appointmentDate, 'id': 'appointmentDate', 'label': 'Appointment Date' },
            { 'type': 'content', 'value': content }
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
                    onSubmit={() => this.props.updateCare(id, name, title, appointmentDate, content)}
                    submitButton={submitButton}
                />
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.careUpdateReducer.loading,
        loadingGetOne: state.careOneReducer.loading,
        data: state.careOneReducer.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateCare: (id, name, title, appointmentDate, content) => {
            dispatch(careActions.update(id, name, title, appointmentDate, content))
        },
        getOne: (name, id) => {
            dispatch(careActions.getOne(name, id))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CareEditForm);
