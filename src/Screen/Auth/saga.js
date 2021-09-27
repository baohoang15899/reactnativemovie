
import { takeLatest, put, call, delay } from '@redux-saga/core/effects';
import { HomeScreen } from '../../Navigation/Stack';
import { uploadImage } from '../../Camera/Index'
import {
    REGISTER,
    LOGIN_STATUS,
    GET_USER,
    GET_USER_SUCCESS,
    LOG_OUT,
    LOG_OUT_SUCCESS,
    LOG_IN,
    LOG_IN_SUCCESS,
    LOADING,
    LOADING_SUCCESS,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    NAVIGATE,
    NAVIGATE_SUCCESS,
    UPDATE_AVATAR,
    UPDATE_AVATAR_SUCCESS
} from './constants';
import { getUser, register, logout, login, handleUpdateProfile, handleUpdateAvatar } from './service';



function* handleLoginSaga({ payload }) {
    yield put({ type: LOADING })
    try {
        const res = yield call(register, payload);
        yield put({ type: LOGIN_STATUS, payload: { user: res } });
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put({ type: LOADING_SUCCESS })
    }
}

function* handleGetUser({ payload }) {
    const res = yield call(getUser, payload);
    yield put({ type: GET_USER_SUCCESS, payload: { user: res } });
}

function* handleLogout() {
    yield put({ type: LOADING })
    try {
        yield call(logout)
        yield put({ type: LOG_OUT_SUCCESS })
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put({ type: LOADING_SUCCESS })
    }
}

function* handleLogin({ payload }) {
    yield put({ type: LOADING })
    try {
        yield call(login, payload)
        yield put({ type: LOG_IN_SUCCESS })
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put({ type: LOADING_SUCCESS })
    }
}

function* handleUpdate({ payload }) {
    yield put({ type: NAVIGATE })
    yield put({ type: LOADING })
    try {
        const user = yield call(handleUpdateProfile, payload)
        yield put({ type: UPDATE_PROFILE_SUCCESS, payload: { user: user } })
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put({ type: LOADING_SUCCESS })
        yield put({ type: NAVIGATE_SUCCESS })
    }
}

function* handleAvatar({ payload }) {
    yield put({ type: LOADING })
    try {
        const user = yield call(handleUpdateAvatar, payload)
        yield put({ type: UPDATE_PROFILE_SUCCESS, payload: { user: user } })
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put({ type: LOADING_SUCCESS })
    }
}


function* watchAuthSaga() {
    yield takeLatest(REGISTER, handleLoginSaga);
    yield takeLatest(GET_USER, handleGetUser)
    yield takeLatest(LOG_OUT, handleLogout)
    yield takeLatest(LOG_IN, handleLogin)
    yield takeLatest(UPDATE_PROFILE, handleUpdate)
    yield takeLatest(UPDATE_AVATAR, handleAvatar)
}
export default watchAuthSaga;
