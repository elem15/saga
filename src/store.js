import apiReducer from 'modules/api/reducer'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const reducers = combineReducers({
    api: apiReducer
})

const store = createStore(reducers, composeEnhancers())

export default store