import {takeLatest, put, call, delay} from '@redux-saga/core/effects';
import {LOGIN} from './constants';

function* handleLoginSaga(payload) {
    return true
}

function* watchAuthSaga() {
    yield takeLatest(LOGIN, handleLoginSaga);
    // yield takeLatest(AUTH_CONST.REGISTER, handleRegisterSaga);
    // yield takeLatest(AUTH_CONST.LOGOUT, handleLogoutSaga);
    // // yield takeLatest(AUTH_CONST.CHECK, handleStatus);
    // yield takeLatest(AUTH_CONST.GOOGLE, handleGoogle);
    // yield takeLatest(AUTH_CONST.USER_SET, handleUser);
    // yield takeLatest(AUTH_CONST.USER_DEL, handleUserClear);
  }
  export default watchAuthSaga;