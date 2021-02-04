import { LOGIN, LOGOUT } from "../constants/user.constant";

export const logInAct = (payload) => ({
    type: LOGIN,
    payload
});

export const logOutAct = () => ({
    type: LOGOUT,
})
