import React, { Component } from 'react'
import { Grid, Avatar } from '@material-ui/core'

export class AccountInfos extends Component {
    render() {
        return (
            <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item xs={4}>
                    <Avatar alt={this.props.firstName} src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item xs={8}>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-star">
                        <Grid item xs={6}>
                            <h4>{this.props.firstName} {this.props.lastName}</h4>
                        </Grid>
                        <Grid item xs={6}>
                            <h5>{this.props.email}</h5>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default AccountInfos
