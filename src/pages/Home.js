import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PetList from '../components/Pet/PetList';
import AddIcon from '@material-ui/icons/Add';
import Welcome from '../components/Home/Welcome';


const useStyles = theme => ({
    spacer: {
        margin: theme.spacing(4)
    },
    spacerLight: {
        margin: theme.spacing(2)
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
});

class Home extends React.Component {

    createAddFab(classes) {
        return (
            <Fab className={classes.fab}
                size="large"
                color="secondary"
                aria-label="add"
                component={Link} to="/pet/add">
                <AddIcon />
            </Fab>
        );
    }

    render() {
        const { classes, loggedIn } = this.props;

        let welcome = '';
        let petList = '';
        let addFab = '';
        if (!loggedIn) {
            welcome = <Welcome />
        } else {
            petList = <PetList />
            addFab = this.createAddFab(classes);
        }

        return (
            <React.Fragment>
                {welcome}
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
