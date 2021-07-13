import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reducer from '../RootReducer'
import Saga from '../RootSaga';

const sagaMiddleware = createSagaMiddleware()
const storeConfig = () =>{
    const middleware = sagaMiddleware
    const store = createStore(Reducer,applyMiddleware(middleware))
    sagaMiddleware.run(Saga)
    return store
}

export default storeConfig