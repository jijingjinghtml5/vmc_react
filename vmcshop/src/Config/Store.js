import { createStore, combineReducers } from 'redux';//, combineReducers, applyMiddleware
import currentTab from '../store/common_reducer'

var store = createStore(
    combineReducers(currentTab)
);

export default store;
