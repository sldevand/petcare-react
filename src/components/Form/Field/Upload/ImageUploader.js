import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Button, Grid, Typography, Divider } from '@material-ui/core';

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

class ImageUploader extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            image: this.props.value
        };
    }

    handleCapture = (event) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);

        fileReader.onload = (e) => {
            this.setState({
                image: e.target.result
            });

            this.props.handleFileUploadChange(e, 'image');
        };
    };

    render() {
        const { classes } = this.props;
        const { image } = this.state;

        return (
            <Grid container direction="column" justify="center" alignItems="center" className={classes.wrapper} >
                <Grid container direction="row" justify="space-between" alignItems="flex-end">
                    <Grid item >
                        <Typography color="inherit" >Image</Typography>
                    </Grid>
                    <Grid item >
                        <input
                            color="primary"
                            accept="image/*"
                            name="image"
                            type="file"
                            onChange={this.handleCapture}
                            id="icon-button-file"
                            style={{ display: 'none', }}
                        />
                    </Grid>
                    <Grid item >
                        <label htmlFor="icon-button-file">
                            <Button
                                variant="outlined"
                                component="span"
                                size="small"
                                color="primary"
                            >
                                <PhotoCamera />
                            </Button>
                        </label>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid item>
                    <img src={image} alt="" className={classes.image}/>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ImageUploader);