import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import FormWrapper from './../Form/FormWrapper';
import SimpleBackdrop from './../Loader/SimpleBackdrop';
import UserForm from './../User/UserForm';
import { petActions } from '../../redux';

class PetAddEditForm extends UserForm {

    state = {
        id: '',
        name: '',
        dob: '',
        specy: '',
        image: ''
    };

    constructor() {
        super()
        this.title = "Add/Edit Pet"
    }

    render() {
        const { loading } = this.props;
        const { name, dob, specy, image } = this.state;

        const fieldNames = ['name', 'dob', 'specy', 'image'];
        const submitButton = <Button type="submit" variant="contained" color="primary">Log In</Button>

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={fieldNames}
                    handleChange={this.handleChange}
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
        loggedIn: state.loginReducer.loggedIn
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
)(PetAddEditForm);