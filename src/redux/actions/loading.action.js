import { LOADING_LOGIN, LOADING_SHARE } from './../constants/loading.constant';

export const loadingLoginAct = (payload) => ({
    type: LOADING_LOGIN,
    payload
})

export const loadingShareAct = (payload) => ({
    type: LOADING_SHARE,
    payload
})
