import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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
    spacer: {
        margin: theme.spacing(4)
    }
});

class SubscribeForm extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>Subscribe</h1>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField required id="standard-required" label="Email" type="email" />
                        <TextField required id="standard-required" label="First name" type="text" />
                        <TextField required id="standard-required" label="Last Name" type="text" />
                        <TextField required id="standard-required" label="Password" type="password" />
                        <Grid container direction="row" justify="center">
                            <Button variant="contained" color="primary">Sign Up</Button>
                        </Grid>
                    </form>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(SubscribeForm);