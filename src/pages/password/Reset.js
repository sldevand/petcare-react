import React, { Component } from 'react'
import ResetForm from '../../components/User/Password/ResetForm';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
});

class Reset extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={10} md={8} lg={6} >
                    <Paper className={classes.paper} elevation={3} >
                        <Grid container direction="column" justify="center" alignItems="center" >
                            <ResetForm />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Reset);
