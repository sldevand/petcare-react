import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

export class AccountInfos extends Component {
    render() {
        return (
            <div>
                 <Grid container direction="column" justify="center" alignItems="center">
                    <h4>{this.props.firstName} {this.props.lastName}</h4>
                    <h5>{this.props.email}</h5>
                </Grid>
            </div>
        )
    }
}

export default AccountInfos
