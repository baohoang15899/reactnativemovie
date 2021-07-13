import {all} from 'redux-saga/effects';
import authSaga from '../src/Screen/Auth/saga';
function* rootSaga(){
    yield all([
        authSaga()
    ])
}

export default rootSaga