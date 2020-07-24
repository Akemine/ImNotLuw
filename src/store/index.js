import * as reducers from './reducers/reducers';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

const galerieAppReducers = combineReducers(reducers)
const store = createStore(galerieAppReducers)

export default store