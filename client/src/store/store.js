import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReduder from './root.reducer';

// init middleware list
const middlewares = [];

middlewares.push(thunk);
const store = createStore(rootReduder, applyMiddleware(...middlewares));

export default store;
