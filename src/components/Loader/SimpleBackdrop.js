import React from 'react';
import { withStyles } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
})

class SimpleBackdrop extends React.Component {
    render() {
        const { classes, open } = this.props;

        return (
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
}

export default withStyles(useStyles)(SimpleBackdrop);