import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import CareList from '../../components/Care/CareList';

const useStyles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
});

class CareIndex extends React.Component {
    render() {
        const { loggedIn, classes } = this.props;
        const { name } = this.props.match.params;

        if (!loggedIn) {
            this.props.history.push(`/`);
        }

        return (
            <React.Fragment>
                <CareList routeMatch={this.props.match} routeHistory={this.props.history}></CareList>
                <Fab className={classes.fab}
                    size="large"
                    color="secondary"
                    aria-label="add"
                    component={Link} to={`/care/add/${name}`}>
                    <AddIcon />
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
)(CareIndex);
