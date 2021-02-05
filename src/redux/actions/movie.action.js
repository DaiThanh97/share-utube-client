import { GET_MOVIES } from "../constants/movie.constant";

export const getMoviesAct = (payload) => ({
    type: GET_MOVIES,
    payload
})