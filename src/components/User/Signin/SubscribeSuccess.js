import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class SubscribeSuccess extends Component {

    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <h3>{this.props.message}</h3>
                </Grid>

                <Grid item> 
                   <Button variant="outlined" color="secondary" component={Link} to="/login">Login</Button>
                </Grid>
            </Grid>
        )
    }
}

export default SubscribeSuccess;
