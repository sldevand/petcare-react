import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Paper } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator';
import UserForm from './../UserForm';
import { loginActions } from '../../../redux';

const useStyles = theme => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    margin: theme.spacing(4)
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
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
      <Paper className={classes.paper} elevation={3} >
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
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer.loggedIn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    passwordReset: (email) => {
      dispatch(loginActions.passwordReset(email))
    }
  }
}

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(ResetForm);

