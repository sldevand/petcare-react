import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = theme => ({
    spacer: {
        marginBottom: theme.spacing(2),
    }
});

class SuccessWithLink extends Component {

    render() {
        const { message, to, title, classes } = this.props;

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item className={classes.spacer} >
                    <Typography variant="h6" color="inherit" >{message}</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary" component={Link} to={to}>{title}</Button>
                </Grid>
            </Grid>
        )
    }
}

export default  withStyles(useStyles)(SuccessWithLink);
