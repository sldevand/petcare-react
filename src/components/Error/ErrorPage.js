import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import { Grid } from '@material-ui/core';


const useStyles = theme => ({
    spacer: {
        margin: theme.spacing(4)
    }
});

class ErrorPage extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item className={classes.spacer}>
                    <ErrorIcon fontSize="large" color="secondary" />
                </Grid>
                <Grid item direction="row" justify="center" alignItems="center">
                    <h1>An error occured!</h1>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(ErrorPage);