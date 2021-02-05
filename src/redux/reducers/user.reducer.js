import { userService } from "../../services/user.service";
import { LOGIN, LOGOUT, CHECK_LOGIN } from "../constants/user.constant";

const initialState = {
    username: '',
    isLoggedIn: false,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            const { data: { token, username } } = payload;
            // Saved token
            userService.setToken(token);
            userService.setUsername(username);
            state.username = username;
            state.isLoggedIn = true;
            return { ...state }
        }
        case LOGOUT: {
            userService.setToken('');
            userService.setUsername('');
            state.isLoggedIn = false;
            return { ...state };
        }
        case CHECK_LOGIN: {
            const isTokenExpired = userService.isTokenExpired();
            if (isTokenExpired) {
                state.isLoggedIn = false;
                state.username = '';
            }
            else {
                state.isLoggedIn = true;
                state.username = userService.getUsername();
            }
            return { ...state };
        }
        default:
            return { ...state }
    }
}

export default userReducer;