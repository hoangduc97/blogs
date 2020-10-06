import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './home/home.page';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
