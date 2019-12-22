import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class SimpleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    let state = this.state;
    state.anchorEl = event.currentTarget;
    this.setState(state);
  };

  handleClose = () => {
    let state = this.state;
    state.anchorEl = null;
    this.setState(state);
  };

  render() {
    return (
      <div>
        <ClickAwayListener onClickAway={this.handleClose}>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="start" color="inherit" aria-label="menu" onClick={this.handleClick}>
            <MenuIcon />
          </IconButton>
        </ClickAwayListener>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={() => this.handleClose}
        >
          <MenuItem onClick={this.handleClick}>Profile</MenuItem>
          <MenuItem onClick={this.handleClick}>My account</MenuItem>
          <MenuItem onClick={this.handleClick}>Logout</MenuItem>
        </Menu>

      </div>
    );
  }
}

export default SimpleMenu;