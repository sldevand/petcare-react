import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MainIcon from '../components/Icons/MainIcon';
import PetList from '../components/Pet/PetList';
import GridPaper from '../components/Container/GridPaper';


const useStyles = theme => ({
    spacer: {
        margin: theme.spacing(4)
    }
});

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        const { title } = this.props;

        let noAccount = '';
        let description = '';
        let petList = ''
        if (!this.props.loggedIn) {
            noAccount =
                <React.Fragment>
                    <div className={classes.spacer}>No Account ?</div>
                    <Button variant="outlined" color="secondary" component={Link} to="/subscribe">Sign Up</Button>
                </React.Fragment>
            description =
                <Grid item >
                    <h4>This app is a notebook where you can manage your pet(s) health care.</h4>
                </Grid>

        } else {
            let petsData = [
                {
                    name: "Elie",
                    src: "static/images/avatar/cat.jpg",
                    dob: "02/05/2010"
                },
                {
                    name: "Medor",
                    src: "/static/images/avatar/dog.jpg",
                    dob: "25/10/2012"
                },
                {
                    name: "Bubulle",
                    src: "/static/images/avatar/fish.jpg",
                    dob: "25/12/2012"
                }
            ]
            petList = <PetList petsData={petsData}></PetList>
        }

        return (
            <React.Fragment>
                <GridPaper>
                    <h3>Welcome To {title}</h3>
                    <Grid item xs={3} sm={2} md={2} lg={1} xl={1} >
                        <MainIcon />
                    </Grid>
                    {description}
                    {noAccount}
                </GridPaper>
                {petList}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps)
)(Home);
