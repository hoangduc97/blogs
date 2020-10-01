import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';

const epicMiddleware = createEpicMiddleware();

const store = createStore('', applyMiddleware(epicMiddleware));

export default store;
