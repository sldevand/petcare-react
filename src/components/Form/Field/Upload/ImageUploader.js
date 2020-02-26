import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Button, Grid, Typography, Divider } from '@material-ui/core';

const styles = theme => ({
    bottomSpacer: {
        marginBottom: theme.spacing(2)
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

    state = {
        images: []
    };

    handleCapture = (event) => {
        const fileReader = new FileReader();
        const name = event.target.accept.includes('image') ? 'images' : 'videos';

        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = (e) => {
            this.setState((prevState) => ({
                [name]: [...prevState[name], e.target.result]
            }));

            this.props.handleFileUploadChange(e, 'image');
        };
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container direction="column" justify="center" alignItems="flex-end" className={classes.bottomSpacer} >
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
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ImageUploader);