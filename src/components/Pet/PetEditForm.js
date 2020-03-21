import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import FormWrapper from '../Form/FormWrapper';
import SimpleBackdrop from '../Loader/SimpleBackdrop';
import { petActions } from '../../redux';
import UserForm from '../Form/AbstractForm';

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

    componentWillReceiveProps(nextProps) {
        const { id, name, dob, specy } = nextProps.data;
        const { image } = nextProps;
        this.setState({ id, name, dob, specy, image });
    }

    render() {
        const { loading, loadingGetOne } = this.props;
        const { id, name, dob, specy, image } = this.state;

        let loadingValue = loadingGetOne ? loadingGetOne : loading;

        const submitButton = <Button type="submit" variant="contained" color="primary">{this.title}</Button>

        const fields = [
            { 'type': 'name', 'value': name },
            { 'type': 'dob', 'value': dob },
            { 'type': 'specy', 'value': specy },
            { 'type': 'image', 'value': image },
        ];

        return (
            <React.Fragment>
                <FormWrapper
                    title={this.title}
                    fieldNames={fields}
                    handleChange={this.handleChange}
                    handleDateChange={this.handleDateChange}
                    handleFileUploadChange={this.handleFileUploadChange}
                    onSubmit={() => this.props.update(id, name, dob, specy, image)}
                    submitButton={submitButton}
                />
                <SimpleBackdrop open={loadingValue} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.petUpdateReducer.loading,
        loadingGetOne: state.petOneReducer.loading,
        data: state.petOneReducer.data,
        image: state.petOneReducer.image
    };
}

const mapDispatchToProps = dispatch => {
    return {
        update: (id, name, dob, specy, image) => {
            dispatch(petActions.update(id, name, dob, specy, image))
        },
        getOne: (name) => {
            dispatch(petActions.getOne(name))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PetEditForm);
