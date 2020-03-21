import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import FormWrapper from '../Form/FormWrapper';
import SimpleBackdrop from '../Loader/SimpleBackdrop';
import { petActions } from '../../redux';
import UserForm from '../User/UserForm';

class PetEditForm extends UserForm {

    state = {
        id: '',
        name: '',
        dob: new Date(),
        specy: '',
        image: ''
    };

    constructor(props) {
        super(props);
        this.title = "Edit Pet";
    }

    componentDidMount() {
        const { name } = this.props.routeMatch.params;
        this.props.getOne(name);
    }

    render() {
        const { loading, image } = this.props;
        const { id, name, dob, specy} = this.props.data;

        const submitButton = <Button type="submit" variant="contained" color="primary">{this.title}</Button>

        this.fields = [
            {'type':'name','value':name},
            {'type':'dob','value':dob},
            {'type':'specy','value':specy},
            {'type':'image','value':image},
        ];

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={this.fields}
                    handleChange={this.handleChange}
                    handleDateChange={this.handleDateChange}
                    handleFileUploadChange={this.handleFileUploadChange}
                    onSubmit={() => this.props.updatePet(id, name, dob, specy, image)}
                    submitButton={submitButton}
                />
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.petAddReducer.loading,
        data: state.petOneReducer.data,
        image: state.petOneReducer.image
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updatePet: (id, name, dob, specy, image) => {
            dispatch(petActions.updatePet(id, name, dob, specy, image))
        },
        getOne: (name) => {
            dispatch(petActions.getOne(name))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PetEditForm);
