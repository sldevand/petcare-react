import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import GridPaper from '../Container/GridPaper';
import { List, Divider, CircularProgress, Grid, Typography } from '@material-ui/core';
import { careActions } from '../../redux';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CareItem from './CareItem';

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

class CareList extends React.Component {
    componentDidMount() {
        const { name } = this.props.routeMatch.params;
        this.props.getList(name);
    }

    createItems(caresData) {
        if (Object.keys(caresData).length === 0) {
            return [];
        }
        const { name } = this.props.routeMatch.params;
     
        return Object.keys(caresData).map((index) => {
            const care = caresData[index];
            let divider = (index < caresData.length - 1)
                ? <Divider key={care.id + "_divider"} variant="inset" component="li" />
                : '';

            return (
                <React.Fragment key={care.id + "_frag"}>
                    <CareItem key={care.id} id={care.id} title={care.title} petName={name} appointmentDate={care.appointmentDate}/>
                    {divider}
                </React.Fragment>
            )
        })
    }

    createContent(loading, cares) {

        return (loading)
            ? <CircularProgress />
            : (cares.length > 0)
                ? <List>
                    {cares}
                </List>
                : <h5>You have no cares, click on the + button to add one</h5>
    }

    render() {
        const { caresData, success, loading, classes } = this.props;
        const { name } = this.props.routeMatch.params;
        let cares = [];
        if (success) {
            cares = this.createItems(caresData);
        }

        let content = this.createContent(loading, cares);

        return (
            <GridPaper>
                <div className={classes.root}>
                    <div className={classes.cardTitle}>
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                            <Grid item>                                
                                <LocalHospitalIcon fontSize="large" color="secondary" />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" color="inherit" >
                                    Cares for {name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.cardContent}>
                        {content}
                    </div>
                </div>
            </GridPaper>

        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.careListReducer.loading,
        success: state.careListReducer.success,
        caresData: state.careListReducer.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getList: (name) => {
            dispatch(careActions.getList(name))
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(CareList);
