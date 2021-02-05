import React, { memo, Fragment, useState, useEffect } from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import { StyledTextField } from './../../HOC/StyledTextField';
import { useStyles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_SAGA } from '../../redux/constants/user.constant';
import { Link, useHistory } from 'react-router-dom';
import { logOutAct } from '../../redux/actions/user.action';

function NavBar() {
    const classes = useStyles();
    const [user, setUser] = useState({ username: '', password: '' });
    const [disableLogin, setDisableLogin] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const { isLoggedIn, username } = useSelector(state => state.userReducer);

    useEffect(() => {
        console.log("RENDER");
        setDisableLogin(isLoggedIn);
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = () => {
        // Dispatch to saga
        dispatch({ type: LOGIN_SAGA, payload: user });
        setDisableLogin(true);
    }

    const handleLogout = () => {
        dispatch(logOutAct());
        history.push('/');
    }

    const showLoggedIn = () => {
        return isLoggedIn ?
            <Fragment>
                <Box display="flex" alignItems="center">
                    <Box css={{ marginRight: 3 }}>
                        <Typography color="textPrimary">
                            Welcome
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="secondary">
                            {username}
                        </Typography>
                    </Box>
                </Box>
                <Button color="secondary" variant="contained" className={classes.btn}>
                    <Link to="/share" className={classes.link}>
                        Share a movie
                    </Link>
                </Button>
                <Button color="secondary" variant="contained" className={classes.btn} onClick={handleLogout}>
                    LogOut
                </Button>
            </Fragment>
            : <Fragment>
                <nav>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <StyledTextField
                                id="username"
                                label="Username"
                                name="username"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <LockIcon />
                        </Grid>
                        <Grid item>
                            <StyledTextField
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </nav>
                <Button color="secondary" disabled={disableLogin} variant="contained" className={classes.btn} onClick={handleLogin}>
                    Login/Register
                </Button>
            </Fragment>
    }

    return (
        <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link to="/" className={classes.toolbarTitle}>
                    <YouTubeIcon fontSize="large" color="secondary" />
                    <Typography variant="h6" color="secondary" noWrap>
                        ShareTube
                    </Typography>
                </Link>
                {showLoggedIn()}

            </Toolbar>
        </AppBar>
    )
}

export default memo(NavBar);