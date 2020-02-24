import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = theme => ({
    spacer: {
        marginBottom: theme.spacing(1),
    }
});

class NoAccount extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant="body1" color="inherit" className={classes.spacer} >No Account ?</Typography>
                <Button variant="outlined" color="secondary" component={Link} to="/subscribe">Sign In</Button>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(NoAccount);
