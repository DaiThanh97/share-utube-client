import { LOGIN, LOGOUT } from "../constants/user.constant";
import { STORAGE_KEY } from './../../configs/constant';

const initialState = {
    username: '',
    isLoggedIn: false,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            const { data: { token, username } } = payload;
            // Saved token
            localStorage.setItem(STORAGE_KEY.USER_TOKEN, token);
            state.username = username;
            state.isLoggedIn = true;
            return { ...state }
        }
        case LOGOUT: {
            localStorage.setItem(STORAGE_KEY.USER_TOKEN, '');
            state.isLoggedIn = false;
            return { ...state };
        }
        default:
            return { ...state }
    }
}

export default userReducer;