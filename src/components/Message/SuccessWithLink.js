import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SuccessWithLink extends Component {

    render() {
        const { message, to, title } = this.props;

        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <h3>{message}</h3>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="secondary" component={Link} to={to}>{title}</Button>
                </Grid>
            </Grid>
        )
    }
}

export default SuccessWithLink;
