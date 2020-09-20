import { Typography, CardActionArea, CardMedia, CardContent, Button, CardActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { petActions } from '../../redux';
import SimpleBackdrop from './../Loader/SimpleBackdrop';
import DateHelper from '../../helpers/dateHelper';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const styles = theme => ({
    wrapper: {
        width: '100%',
        marginBottom: theme.spacing(2)
    },
    divider: {
        width: '100%',
        height: '1px',
        marginTop: theme.spacing(1),
        backgroundColor: '#808080'

    },
    media: {
        maxWidth: "350px",
        maxHeight: "350px"
    },
});

class PetInfos extends React.Component {

    componentDidMount() {
        const { name } = this.props.routeMatch.params;
        this.props.getOne(name);
    }

    render() {
        const { loading, classes, image } = this.props
        const { name, specy, dob } = this.props.data;

        return (
            <React.Fragment>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography  >
                            {specy}
                        </Typography>
                    </CardContent>
                    <Box display="flex" justifyContent="center">
                        <CardMedia
                            className={classes.media}
                            image={image || ''}
                            title={name}
                            component="img"
                        />
                    </Box>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Born in {DateHelper.getDateOnly(dob, 'fr-FR')}, {DateHelper.getAge(dob)} Years old
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="primary" component={Link} to={`/care/${name}`}>
                        <LocalHospitalIcon color="secondary"/><Typography>Cares</Typography>
                    </Button>
                </CardActions>
                <SimpleBackdrop open={loading} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.petOneReducer.loading,
        data: state.petOneReducer.data,
        image: state.petOneReducer.image
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getOne: (name) => {
            dispatch(petActions.getOne(name))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(PetInfos);
