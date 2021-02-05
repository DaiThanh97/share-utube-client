import { NOTI } from "../constants/noti.constant"

const initialState = {
    status: -1,
    message: ''
}

const errorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case NOTI:
            state.status = payload.status;
            state.message = payload.message;
            return { ...state }
        default:
            return state
    }
}

export default errorReducer;