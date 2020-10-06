import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReduder from './root.reducer';

// init middleware list
const middlewares = [];

const epicMiddleware = createEpicMiddleware();
const logger = createLogger()
middlewares.push(epicMiddleware);
middlewares.push(logger);

const store = createStore(rootReduder, applyMiddleware(...middlewares));

export default store;
