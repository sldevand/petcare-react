import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import GridPaper from '../Container/GridPaper';
import { Grid, Typography, Divider } from '@material-ui/core';
import MainIcon from '../Icons/MainIcon';
import NoAccount from './NoAccount';

const useStyles = theme => ({
    spacer: {
        margin: theme.spacing(1)
    },
    icon: {
        width: 80
    },
    divider: {
        marginBottom: theme.spacing(1),
        width: 300
    },
});

class Welcome extends React.Component {
    render() {

        const { classes } = this.props;

        return (
            <GridPaper>
                <Grid item >
                    <Typography variant="h5" color="inherit"  className={classes.spacer} >Welcome !</Typography>
                </Grid>
                <Grid item >
                    <MainIcon className={classes.icon}/>
                </Grid>
                <Grid item >
                    <Typography variant="body1" color="inherit"  className={classes.spacer} >Petcare is a notebook to manage your pet(s) health</Typography>
                </Grid>
                <Grid item className={classes.divider} >
                    <Divider />
                </Grid>
                <Grid item>
                    <NoAccount  className={classes.spacer} />
                </Grid>
            </GridPaper >
        )
    }
}

export default withStyles(useStyles)(Welcome);
