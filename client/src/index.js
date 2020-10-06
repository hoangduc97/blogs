import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './configs/store';
import RootPage from './pages/root.page';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <RootPage />
    </Provider>,
    document.getElementById('root')
);
