import { createStore, combineReducers } from 'redux';//, combineReducers, applyMiddleware
import reducer from '../store/index/reducer'

var store = createStore(
    combineReducers(reducer)
);

export default store;
