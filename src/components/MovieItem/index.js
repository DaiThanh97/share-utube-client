import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'
import ReactPlayer from 'react-player';
import { useStyles } from './style';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default function MovieItem() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} alignItems="flex-start">
                <Grid item sm={12} md={7}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=HOCxJ0-KKos" controls width="100%" />
                </Grid>
                <Grid item sm={12} md={5}>
                    <div className={classes.content}>
                        <Typography variant="h6" color="secondary">
                            This is Title
                        </Typography>
                        <Typography variant="body1" >
                            Shared by: John Cena
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Box display="flex" alignItems="center" css={{ marginRight: 10 }}>
                                <Box css={{ marginRight: 2 }}>
                                    <Typography variant="body1" display="inline">
                                        89
                                    </Typography>
                                </Box>
                                <Box>
                                    <ThumbUpIcon />
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box css={{ marginRight: 2 }}>
                                    <Typography variant="body1" display="inline">
                                        20
                                    </Typography>
                                </Box>
                                <Box>
                                    <ThumbDownIcon />
                                </Box>
                            </Box>
                        </Box>
                        <Typography variant="body1" >
                            Description:
                        </Typography>
                        <Typography variant="body1" className={classes.description}>
                            This is Rap Viet
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
