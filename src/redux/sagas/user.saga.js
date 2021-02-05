import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_SAGA } from '../constants/user.constant';
import { userService } from './../../services/user.service';
import { STATUS_CODE } from '../../configs/constant';
import { logInAct } from './../actions/user.action';
import { notiAct } from '../actions/noti.action';

function* loginUser({ payload }) {
    try {
        const { username, password } = payload;
        const { status, data } = yield call(() => userService.logIn(username, password));
        if (status === STATUS_CODE.SUCCESS) {
            // Dispatch action to store
            yield put(logInAct(data));
        }
        yield put(notiAct({ status, message: data.message }));
    }
    catch (err) {
        const { status, data } = err.response;
        yield put(notiAct({ status, message: data.message }));
    }
}

export function* userSaga() {
    yield takeLatest(LOGIN_SAGA, loginUser);
}