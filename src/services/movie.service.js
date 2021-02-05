import Axios from 'axios';
import { userService } from './user.service';

class MovieService {
    getMovies = (page, count) => {
        return Axios.get(`${process.env.REACT_APP_API_URL}/movie?page=${page}&count=${count}`);
    }

    shareMovie = (url) => {
        return Axios.post(`${process.env.REACT_APP_API_URL}/movie/share`, {
            url,
        }, {
            headers: {
                Authorization: `Bearer ${userService.getToken()}`
            }
        });
    }
}

export const movieService = new MovieService();