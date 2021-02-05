import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'
import ReactPlayer from 'react-player';
import { useStyles } from './style';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default function MovieItem(props) {
    const classes = useStyles();
    const { movie } = props;

    return (
        <div>
            <Grid container spacing={1} alignItems="flex-start">
                <Grid item sm={12} md={7}>
                    <ReactPlayer url={movie.url} controls width="100%" />
                </Grid>
                <Grid item sm={12} md={5}>
                    <div className={classes.content}>
                        <Typography variant="h6" color="secondary">
                            {movie.title}
                        </Typography>
                        <Typography variant="body1" >
                            Shared by: {movie.user.username}
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Box display="flex" alignItems="center" css={{ marginRight: 10 }}>
                                <Box css={{ marginRight: 2 }}>
                                    <Typography variant="body1" display="inline">
                                        {(+movie.likeCount).toLocaleString()}
                                    </Typography>
                                </Box>
                                <Box>
                                    <ThumbUpIcon />
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box css={{ marginRight: 2 }}>
                                    <Typography variant="body1" display="inline">
                                        {(+movie.dislikeCount).toLocaleString()}
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
                            {movie.description}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
