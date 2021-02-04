import React, { memo } from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import { useStyles } from './style';

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <YouTubeIcon fontSize="large" color="secondary" />
                <Typography variant="h6" color="secondary" noWrap className={classes.toolbarTitle}>
                    ShareTube
                </Typography>
                {/* <nav>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="username" label="Username" />
                        </Grid>
                        <Grid item>
                            <LockIcon />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                </nav> */}
                <Box display="flex" alignItems="center">
                    <Box css={{ marginRight: 3 }}>
                        <Typography color="textPrimary">
                            Welcome
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color="secondary">
                            Yasuo
                        </Typography>
                    </Box>
                </Box>
                <Button href="#" color="secondary" variant="contained" className={classes.link}>
                    Share a movie
                </Button>
                <Button href="#" color="secondary" variant="contained" className={classes.link}>
                    Login/Register
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default memo(NavBar);