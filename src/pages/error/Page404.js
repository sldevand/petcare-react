import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import { Grid, Button } from '@material-ui/core';
import GridPaper from '../../components/Container/GridPaper';
import { Link } from 'react-router-dom';

const useStyles = theme => ({
    button: {
        margin: theme.spacing(4)
    }
});

class Page404 extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <GridPaper>
                <Grid item>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <ErrorIcon fontSize="large" color="secondary" />
                        </Grid>
                        <Grid item>
                            <span>404 : Oops! this page does not exist</span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button className={classes.button} variant="outlined" color="secondary" component={Link} to="/">Home</Button>
                </Grid>
            </GridPaper>
        );
    }
}

export default withStyles(useStyles)(Page404);