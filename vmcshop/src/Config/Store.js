import { createStore, combineReducers } from 'redux';//, combineReducers, applyMiddleware
import { change_tab } from '../reducers/'

var store = createStore(
    combineReducers(change_tab)
);

export default store;
