import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import store from './configs/store';
import RootPage from './pages/root.page';
import './index.scss';

library.add(faUser);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RootPage />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
