import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import CareInfos from '../../components/Care/CareInfos';
import GridPaper from '../../components/Container/GridPaper';

const useStyles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
});

class CareSheet extends React.Component {

    render() {
        const { loggedIn, classes } = this.props;
        const { name, id } = this.props.match.params;

        if (!loggedIn) {
            this.props.history.push(`/`);
        }

        return (
            <React.Fragment>
                <GridPaper>
                    <CareInfos routeMatch={this.props.match} routeHistory={this.props.history}></CareInfos>
                </GridPaper>
                <Fab className={classes.fab}
                    size="large"
                    color="secondary"
                    aria-label="edit"
                    component={Link} to={`/care/edit/${name}/${id}`}>
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
)(CareSheet);
