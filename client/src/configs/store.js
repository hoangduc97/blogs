import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReduder from './root.reducer';

// init middleware list
const middlewares = [];

const logger = createLogger()
middlewares.push(logger);

const store = createStore(rootReduder, applyMiddleware(...middlewares));

export default store;
