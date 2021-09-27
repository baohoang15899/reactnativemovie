import {combineReducers} from 'redux'
import authReducer from '../src/Screen/Auth/reducer'
import homeReducer from '../src/Screen/Home/reducer'
import filmDetail from '../src/Screen/MovieDetail/reducer'
const rootReducer = combineReducers({
    auth:authReducer,
    home:homeReducer,
    movieDetail:filmDetail
})

export default rootReducer