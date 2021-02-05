import React, { useEffect, useRef, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import MovieItem from '../../components/MovieItem';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MOVIES_SAGA } from '../../redux/constants/movie.constant';
import { useStyles } from './style';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@material-ui/core';

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const paginationRef = useRef({ page: 1, count: 4 });
    const { totalMovie, listMovie } = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch({ type: GET_MOVIES_SAGA, payload: paginationRef.current });
    }, [dispatch]);

    const fetchMovies = () => {
        paginationRef.current.page++;
        dispatch({ type: GET_MOVIES_SAGA, payload: paginationRef.current });
    }

    const generateListMovie = () => {
        return listMovie.map((movie, index) => {
            return <Card key={index} className={classes.movie}>
                <CardContent>
                    <MovieItem movie={movie} />
                </CardContent>
            </Card>
        });
    }

    return (
        <div>
            <Container maxWidth="md" component="main">
                <InfiniteScroll
                    dataLength={listMovie.length}
                    next={fetchMovies}
                    hasMore={totalMovie !== listMovie.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>No more shared videos</b>
                        </p>
                    }
                >
                    {generateListMovie()}
                </InfiniteScroll>
            </Container>
        </div>
    );
}
