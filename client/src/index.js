import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Router from './pages/router';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
