import { createStore, combineReducers } from 'redux';//, combineReducers, applyMiddleware
import reducer from '../pages/index/reducer'
import loginReducer from '../pages/login/reducer'
var store = createStore(
    combineReducers(reducer,loginReducer)
);

export default store;

