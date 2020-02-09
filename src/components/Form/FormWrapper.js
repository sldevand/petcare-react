import React from 'react'
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Fields from './Fields';

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
class FormWrapper extends React.Component {
    render() {
        const { classes, title, onSubmit, submitButton, handleChange, fieldNames } = this.props;

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <h1>{title}</h1>
                </Grid>
                <Grid item xs={12}>
                    <ValidatorForm
                        className={classes.root}
                        ref="form"
                        onSubmit={onSubmit}
                        onError={errors => console.error(errors)}
                    >
                        <Fields fieldNames={fieldNames} handleChange={handleChange} />

                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                {submitButton}
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(FormWrapper);
