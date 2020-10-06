import React from 'react';
import HomePage from './home/home.page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
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
