import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import FormWrapper from '../Form/FormWrapper';
import SimpleBackdrop from '../Loader/SimpleBackdrop';
import { petActions } from '../../redux';
import UserForm from '../User/UserForm';

class PetAddForm extends UserForm {

    state = {
        name: '',
        dob: new Date(),
        specy: '',
        image: ''
    };

    constructor(props) {
        super(props);
        this.title="Add Pets";
    }

    render() {
        const { loading } = this.props;
        const { name, dob ,specy, image } = this.state;

        const fields = [
            {'type':'name','value':name},
            {'type':'dob','value':dob},
            {'type':'specy','value':specy},
            {'type':'image','value':image},
        ];

        const submitButton = <Button type="submit" variant="contained" color="primary">{this.title}</Button>

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={fields}
                    handleChange={this.handleChange}
                    handleDateChange={this.handleDateChange}
                    handleFileUploadChange={this.handleFileUploadChange}
                    onSubmit={() => this.props.addPet(name, dob, specy, image)}
                    submitButton={submitButton}
                />
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.petAddReducer.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addPet: (name, dob, specy, image) => {
            dispatch(petActions.add(name, dob, specy, image))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PetAddForm);
