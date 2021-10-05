import { takeLatest, put, call, delay } from '@redux-saga/core/effects';
import {GET_MOVIE,GET_MOVIE_SUCCESS, GET_SEARCH_RESULTS, GET_SEARCH_RESULTS_SUCCESS, GET_TV, GET_TV_SUCCESS} from './constants'
import {moviePopular,searchMutil,tvPopular} from '../../Api/Service'


function* handleMovie(){
    try {
      const data = yield call(moviePopular)
      yield put({type:GET_MOVIE_SUCCESS,payload: {movies:data.results}})
    } catch (error) {
        console.log(error);
    }
}

function* handleTV(){
    try {
      const data = yield call(tvPopular)
      yield put({type:GET_TV_SUCCESS,payload: {tv:data.results}})
    } catch (error) {
        console.log(error);
    }
}

function* handleSearch({payload} :any){
    try {
        const data = yield call(searchMutil,payload)
        yield put({type:GET_SEARCH_RESULTS_SUCCESS,payload:{results:data}})
    } catch (error) {
        console.log(error);
    }
}

function* watchHomeSaga() {
    yield takeLatest(GET_MOVIE, handleMovie);
    yield takeLatest(GET_TV,handleTV)
    yield takeLatest(GET_SEARCH_RESULTS,handleSearch)
}
export default watchHomeSaga;