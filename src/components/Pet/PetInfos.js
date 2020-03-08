import { Typography, Card, CardActionArea, CardMedia, CardContent, Button, CardActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { petActions } from '../../redux';
import SimpleBackdrop from './../Loader/SimpleBackdrop';

const styles = theme => ({
    wrapper: {
        width: '100%',
        marginBottom: theme.spacing(2)
    },
    image: {
        marginTop:theme.spacing(2),
        maxWidth:'100%'
    },
    divider: {
        width: '100%',
        height: '1px',
        marginTop: theme.spacing(1),
        backgroundColor: '#808080'

    }
});

class PetInfos extends React.Component {

    componentDidMount() {
        const { name } = this.props.routeMatch.params;
        this.props.getOne(name);
    }

    render() {
        const {loading, classes, image} = this.props
        const { name, specy, dob } = this.props.data;

        return (

<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {dob}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

            // <React.Fragment>
            //     <img src={image} alt="No Image" className={classes.image}></img>
            //     <Typography variant="h5" color="inherit" >{name}</Typography>
            //     <Typography variant="h6" color="inherit" >{specy}</Typography>
            //     <Typography variant="h6" color="inherit" >{dob}</Typography>
            //     <SimpleBackdrop open={loading} />
            // </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.petOneReducer.loading,
        data: state.petOneReducer.data,
        image:state.petOneReducer.image
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
    withStyles(styles, { withTheme: true })
)(PetInfos);
