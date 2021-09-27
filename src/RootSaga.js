import {all} from 'redux-saga/effects';
import authSaga from '../src/Screen/Auth/saga';
import homeSaga from '../src/Screen/Home/saga';
import detailSaga from '../src/Screen/MovieDetail/saga'
function* rootSaga(){
    yield all([
        authSaga(),
        homeSaga(),
        detailSaga()
    ])
}

export default rootSaga