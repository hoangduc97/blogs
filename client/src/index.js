import React from 'react';;
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import store from './store/store';
import RootPage from './pages/root.page';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={createBrowserHistory()}>
            <RootPage />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
