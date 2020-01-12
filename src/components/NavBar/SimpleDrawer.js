import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

class SimpleDrawer extends React.Component {
    state = {
        side: "open"
    };

    toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ ...this.state, [side]: open });
    };

    render() {
        const { classes } = this.props;

        let signupItem = '';
        if (!this.props.loggedIn) {
            signupItem =
                <ListItem button key="Sign Up" component={Link} to="/subscribe">
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="Sign Up" />
                </ListItem>;
        }

        const sideList = side => (
            <div
                className={classes.list}
                role="presentation"
                onClick={this.toggleDrawer(side, false)}
                onKeyDown={this.toggleDrawer(side, false)}
            >
                <List>
                    <ListItem button key="Home" component={Link} to="/">
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {signupItem}
                </List>
            </div>
        );

        return (
            <div>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="start" color="inherit" aria-label="menu" onClick={this.toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
            </div>
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
)(SimpleDrawer);