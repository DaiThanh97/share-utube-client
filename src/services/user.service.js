import Axios from 'axios';

class UserService {
    logIn = (username, password) => {
        return Axios.post(`${process.env.REACT_APP_API_URL}/auth/logIn`, {
            username,
            password
        });
    }
}

export const userService = new UserService();