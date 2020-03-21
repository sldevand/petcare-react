import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import GridPaper from '../../components/Container/GridPaper';
import PetInfos from '../../components/Pet/PetInfos';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
});

class PetIndex extends React.Component {
    render() {
        const { loggedIn, classes } = this.props;
        const { name } = this.props.match.params;

        if (!loggedIn) {
            this.props.history.push(`/`);
        }

        return (
            <React.Fragment>
                <GridPaper>
                    <PetInfos routeMatch={this.props.match} routeHistory={this.props.history}></PetInfos>
                </GridPaper>
                <Fab className={classes.fab}
                    size="large"
                    color="secondary"
                    aria-label="edit"
                    component={Link} to={`/pet/edit/${name}`}>
                    <EditIcon />
                </Fab>
            </React.Fragment>
        )
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
)(PetIndex);
