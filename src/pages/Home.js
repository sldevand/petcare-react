import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Grid, Button, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MainIcon from '../components/Icons/MainIcon';
import PetList from '../components/Pet/PetList';
import GridPaper from '../components/Container/GridPaper';
import AddIcon from '@material-ui/icons/Add';


const useStyles = theme => ({
    spacer: {
        margin: theme.spacing(4)
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
});

class Home extends React.Component {
    render() {
        const { classes, loggedIn } = this.props;
        const { title } = this.props;

        let noAccount = '';
        let description = '';
        let petList = '';
        let addFab = '';
        if (!loggedIn) {
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
            petList = <PetList />
            addFab = <Fab className={classes.fab}
                size="large"
                color="secondary"
                aria-label="add"
                component={Link} to="/pet/add">
                <AddIcon />
            </Fab>
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
                {addFab}
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
