import Axios from 'axios';
import decode from 'jwt-decode';
import { STORAGE_KEY } from '../configs/constant';

class UserService {
    logIn = (username, password) => {
        return Axios.post(`${process.env.REACT_APP_API_URL}/auth/logIn`, {
            username,
            password
        });
    }

    isTokenExpired = () => {
        const token = this.getToken();
        try {
            const decoded = decode(token);
            return decoded.exp < Date.now() / 1000;
        }
        catch (err) {
            return true;
        }
    }

    setToken = (token) => {
        localStorage.setItem(STORAGE_KEY.USER_TOKEN, token);
    }

    setUsername = (username) => {
        localStorage.setItem(STORAGE_KEY.USERNAME, username);
    }

    getToken = () => {
        return localStorage.getItem(STORAGE_KEY.USER_TOKEN);
    }

    getUsername = () => {
        return localStorage.getItem(STORAGE_KEY.USERNAME);
    }
}

export const userService = new UserService();