import { takeLatest, put, call, delay } from '@redux-saga/core/effects';
import { CLEAR_DATA_DETAIL, GET_DETAIL, GET_DETAIL_SUCCESS, GET_CAST, GET_CAST_SUCCESS, GET_RECOMMENDATION, GET_RECOMMENDATION_SUCCESS } from './constants';
import { cast, detail, recommend } from '../../Api/Service'

function* handleGetDetail({ payload }: any) {
    try {
        const data = yield call(detail, payload)
        yield put({ type: GET_DETAIL_SUCCESS, payload: { info: data } })
    } catch (error) {
        console.log(error);

    }
}

function* handleGetCast({ payload }: any) {
    try {
        const data = yield call(cast, payload)
        yield put({ type: GET_CAST_SUCCESS, payload: { actors: data } })
    } catch (error) {
        console.log(error);
    }
}

function* handleGetRecommend({ payload }: any) {
    try {
        const data = yield call(recommend, payload)
        yield put({ type: GET_RECOMMENDATION_SUCCESS, payload: { recommend: data } })
    } catch (error) {
        console.log(error);
    }
}

function* watchDetailSaga() {
    yield takeLatest(GET_DETAIL, handleGetDetail);
    yield takeLatest(GET_CAST, handleGetCast)
    yield takeLatest(GET_RECOMMENDATION, handleGetRecommend)
}
export default watchDetailSaga;