import React, { memo, Fragment, useEffect } from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Box, Button, Typography } from '@material-ui/core';
import { StyledTextField } from './../../HOC/StyledTextField';
import { useStyles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_SAGA } from '../../redux/constants/user.constant';
import { Link, useHistory } from 'react-router-dom';
import { checkLoginAct, logOutAct } from '../../redux/actions/user.action';
import { useFormik } from 'formik';
import { validationLogin } from './../../configs/validation';

function NavBar() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { isLoggedIn, username } = useSelector(state => state.userReducer);
    const { loadingLogin } = useSelector(state => state.loadingReducer);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationLogin,
        onSubmit: (values) => {
            // Dispatch to saga
            dispatch({ type: LOGIN_SAGA, payload: { ...values } });
            values.username = "";
            values.password = "";
        },
    });

    useEffect(() => {
        dispatch(checkLoginAct());
    }, [dispatch])

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
                    <form onSubmit={formik.handleSubmit}>
                        <StyledTextField
                            id="username"
                            name="username"
                            label="Username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            className={classes.field}
                        />
                        <StyledTextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            className={classes.field}
                        />
                        <Button color="secondary" disabled={loadingLogin} variant="contained" className={classes.btn} type="submit">
                            Login/Register
                        </Button>
                    </form>
                </nav>
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