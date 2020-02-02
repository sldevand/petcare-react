import React from 'react'
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { loginActions } from '../../../redux';

const useStyles = theme => ({
    title: {
        flexGrow: 1,
        textDecoration: 'none',
        marginLeft: theme.spacing(2),

    },
});

class AccountButton extends React.Component {
    componentWillMount() {
        this.props.isLoggedIn();
    }

    render() {
        const { classes } = this.props;

        let to='/login';
        let title='Login';
        let icon=<ExitToAppIcon />

        if(this.props.loggedIn){
            to='/account';
            title='Account';
            icon=<AccountBoxIcon />
        }        

        return (           
            <Button color="inherit" component={Link} to={to}>
                {icon}
                <Typography variant="button" className={classes.title} color="inherit" >
                    {title}
                </Typography>
            </Button>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {
        isLoggedIn: () => {
            dispatch(loginActions.isLoggedIn())
        }
    }
}

export default compose(
    withStyles(useStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(AccountButton);
