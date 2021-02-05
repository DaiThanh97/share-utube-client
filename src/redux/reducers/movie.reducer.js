import { GET_MOVIES } from "../constants/movie.constant"

const initialState = {
    listMovie: [],
    totalMovie: 0,
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MOVIES: {
            const { totalMovie, movies } = payload.data;
            let listMovieUpdate = state.listMovie.map(movie => ({ ...movie }));
            if (listMovieUpdate.length === 0) {
                listMovieUpdate = movies;
            }
            else {
                listMovieUpdate = listMovieUpdate.concat(movies);
            }
            state.listMovie = listMovieUpdate;
            state.totalMovie = totalMovie;
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default movieReducer;