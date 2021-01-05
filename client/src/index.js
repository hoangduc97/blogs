import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import RootPage from './pages/root.page';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RootPage />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
