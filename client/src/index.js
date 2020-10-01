import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';

import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <h1>Hello</h1>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
