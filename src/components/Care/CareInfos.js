import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Divider, CircularProgress, Grid, Typography} from '@material-ui/core';
import { careActions } from '../../redux';
import DateHelper from '../../helpers/dateHelper';
import SimpleBackdrop from './../Loader/SimpleBackdrop';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = theme => ({
    root: {
        width: '100%',
        maxWidth: 520
    },
    cardTitle: {
        margin: theme.spacing(3, 2),
    },
    cardContent: {
        margin: theme.spacing(3, 2),
    },
});

class CareInfos extends React.Component {
    componentDidMount() {
        const { name, id } = this.props.routeMatch.params;
        this.props.getList(name, id);
    }

    createContent(loading, careData) {
        return (loading)
            ? <CircularProgress />
            : <React.Fragment>
                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                    <Grid item>
                        <ScheduleIcon fontSize="large" color="black" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body" color="inherit" >
                            {DateHelper.toLocaleDateTimeString(careData.appointmentDate, 'fr-FR')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                    <Grid item>
                        <DescriptionIcon fontSize="large" color="black" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body" color="inherit" >{careData.content}</Typography>
                    </Grid>
                </Grid>

            </React.Fragment>
    }


    render() {
        const { careData, loading, classes } = this.props;
        const content = this.createContent(loading, careData);

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <div className={classes.cardTitle}>
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                            <Grid item>
                                <EventIcon fontSize="large" color="primary" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" color="inherit" >
                                    {careData.title}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.cardContent}>
                        {content}
                    </div>
                </div>
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.careOneReducer.loading,
        success: state.careOneReducer.success,
        careData: state.careOneReducer.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getList: (name, id) => {
            dispatch(careActions.getOne(name, id))
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(CareInfos);
