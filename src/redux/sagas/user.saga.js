import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_SAGA } from '../constants/user.constant';
import { userService } from './../../services/user.service';
import { STATUS_CODE } from '../../configs/constant';
import { logInAct } from './../actions/user.action';

function* loginUser({ payload }) {
    const { username, password } = payload;
    const { status, data } = yield call(() => userService.logIn(username, password));
    if (status === STATUS_CODE.SUCCESS) {
        // Dispatch action to store
        yield put(logInAct(data));
    }
}

export function* userSaga() {
    yield takeLatest(LOGIN_SAGA, loginUser);
}