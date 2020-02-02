import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator';
import UserForm from './../UserForm';
import { passwordActions } from '../../../redux';

const useStyles = theme => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    margin: theme.spacing(4)
  }
});

class ResetForm extends UserForm {

  state = {
    email: ''
  };

  render() {

    const { classes } = this.props;
    const { email } = this.state;

    return (

      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <h1>Reset Password</h1>
        </Grid>
        <Grid item xs={12}>
          <ValidatorForm
            className={classes.root}
            ref="form"
            onSubmit={() => this.props.passwordReset(email)}
            onError={errors => console.error(errors)}
          >
            <TextValidator
              label="Email"
              onChange={this.handleChange}
              name="email"
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />

            <Grid item xs={12}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Button type="submit" variant="contained" color="primary">Send Mail</Button>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    loaded: state.passwordReducer.loaded
  };
}

const mapDispatchToProps = dispatch => {
  return {
    passwordReset: (email) => {
      dispatch(passwordActions.passwordReset(email))
    }
  }
}

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(ResetForm);

